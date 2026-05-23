import os
import json
import io
import tempfile
from datetime import datetime

from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse, HttpResponseBadRequest, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings

import openai
openai.api_key = os.environ.get("API")
MODEL_NAME = os.environ.get("OPENAI_MODEL", "gpt-4o-nano")

from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas

from .models import CareerProfile

# Basic helper to extract text from uploaded file (PDF / plain text)
def extract_text_from_file(fobj, filename):
    name = filename.lower()
    data = None
    try:
        if name.endswith(".pdf"):
            try:
                from PyPDF2 import PdfReader
                reader = PdfReader(fobj)
                pages = []
                for p in reader.pages:
                    pages.append(p.extract_text() or "")
                data = "\n".join(pages)
            except Exception:
                fobj.seek(0)
                data = fobj.read().decode(errors="ignore")
        elif name.endswith(".docx"):
            try:
                import docx
                tmp = tempfile.NamedTemporaryFile(delete=False)
                tmp.write(fobj.read())
                tmp.close()
                doc = docx.Document(tmp.name)
                data = "\n".join(p.text for p in doc.paragraphs)
            except Exception:
                fobj.seek(0)
                data = fobj.read().decode(errors="ignore")
        else:
            # fallback: decode bytes
            fobj.seek(0)
            data = fobj.read().decode(errors="ignore")
    except Exception:
        fobj.seek(0)
        try:
            data = fobj.read().decode(errors="ignore")
        except Exception:
            data = ""
    return data or ""

# Page
def career_page(request):
    return render(request, "Career/career_page.html", {})

@csrf_exempt
def api_start(request):
    # init session
    request.session['career_state'] = {"step": "start", "qa": [], "started_at": datetime.utcnow().isoformat()}
    request.session.modified = True
    return JsonResponse({"status": "started"})

@csrf_exempt
def api_submit_profile(request):
    """
    Accepts multipart form with optional resume file OR JSON with resume_text, plus name, email, objective.
    Returns initial follow-up question (or immediate plan if resume_text is very detailed).
    """
    # If multipart, use request.FILES; else JSON
    if request.method == "POST" and request.FILES.get("resume_file"):
        resume_file = request.FILES["resume_file"]
        resume_text = extract_text_from_file(resume_file.file, resume_file.name)
        name = request.POST.get("name", "") or ""
        email = request.POST.get("email", "") or ""
        objective = request.POST.get("objective", "") or ""
    else:
        try:
            payload = json.loads(request.body.decode("utf-8"))
            name = payload.get("name", "") or ""
            email = payload.get("email", "") or ""
            objective = payload.get("objective", "") or ""
            resume_text = payload.get("resume_text", "") or ""
            resume_file = None
        except Exception:
            return HttpResponseBadRequest("invalid-payload")

    # save to session
    state = request.session.get("career_state", {"qa": []})
    state.update({"name": name, "email": email, "objective": objective, "resume_text": resume_text})
    request.session['career_state'] = state
    request.session.modified = True

    # Ask GPT to summarize candidate and propose top 3 clarifying questions
    prompt = (
        "You are a career mentor assistant. Given the following candidate info, produce:\n"
        "1) A one-line summary of the candidate (skills + years if present)\n"
        "2) Top 3 short clarifying questions to ask the candidate to refine career plan\n\n"
        "Respond with JSON: {\"summary\":\"...\", \"questions\":[\"q1\",\"q2\",\"q3\"]}\n\n"
        f"Candidate objective: {objective}\n\nResume / profile text:\n{resume_text[:4000]}"
    )

    try:
        resp = openai.ChatCompletion.create(
            model=MODEL_NAME,
            messages=[
                {"role":"system", "content":"You are a helpful career mentor."},
                {"role":"user", "content": prompt}
            ],
            max_tokens=400,
            temperature=0.2
        )
        text = resp["choices"][0]["message"]["content"].strip()
        parsed = json.loads(text)
        questions = parsed.get("questions", [])
        summary = parsed.get("summary", "")
    except Exception:
        # fallback heuristics
        summary = "Candidate profile captured."
        questions = [
            "What is your current job title and years of experience?",
            "What is your target job title or role?",
            "What is your available time per week for learning?"
        ]

    # store initial state
    state['summary'] = summary
    state['pending_questions'] = questions
    request.session['career_state'] = state
    request.session.modified = True

    return JsonResponse({"summary": summary, "questions": questions})

@csrf_exempt
def api_question(request):
    """
    Accepts { question: str, answer: str } — appends to QA, asks next follow-up or finishes by requesting a plan from GPT.
    """
    try:
        payload = json.loads(request.body.decode("utf-8"))
        question = payload.get("question", "")
        answer = payload.get("answer", "")
    except Exception:
        return HttpResponseBadRequest("invalid-json")

    state = request.session.get("career_state")
    if not state:
        return JsonResponse({"error": "session_not_initialized"}, status=400)

    # append QA
    state.setdefault("qa", []).append({"q": question, "a": answer})
    request.session['career_state'] = state
    request.session.modified = True

    # If there are still pending questions, pop next
    pending = state.get("pending_questions", [])
    if pending:
        next_q = pending.pop(0)
        state['pending_questions'] = pending
        request.session['career_state'] = state
        request.session.modified = True
        return JsonResponse({"next_question": next_q, "progress": len(state['qa'])})

    # Otherwise, create the final career plan via GPT
    # Build prompt with resume_text, objective, and QA
    resume_text = state.get("resume_text", "")
    objective = state.get("objective", "")
    qa_text = "\n".join([f"Q: {x['q']}\nA: {x['a']}" for x in state.get("qa", [])])

    plan_prompt = (
        "You are an expert career mentor. Using the candidate info and Q/A, produce a JSON object with keys:\n"
        " - summary: one-line candidate summary\n"
        " - target_roles: list of 5 recommended job titles\n"
        " - skills_gap: list of skills to add (with priority)\n"
        " - learning_path: prioritized learning path (items with estimated time)\n"
        " - market_trends: 3 bullet points about market demand for the target roles\n"
        " - salary_estimate: a short sentence with typical salary range by region (USD)\n"
        " - next_steps: 3 concrete next steps\n\n"
        f"Objective: {objective}\n\nResume:\n{resume_text[:4000]}\n\nQ/A:\n{qa_text}"
    )

    try:
        resp = openai.ChatCompletion.create(
            model=MODEL_NAME,
            messages=[
                {"role":"system","content":"You are a concise and practical career consultant."},
                {"role":"user","content": plan_prompt}
            ],
            max_tokens=1000,
            temperature=0.2
        )
        text = resp["choices"][0]["message"]["content"].strip()
        result = json.loads(text)
    except Exception:
        # fallback simple result
        result = {
            "summary": state.get("summary", ""),
            "target_roles": ["Example Role 1", "Example Role 2"],
            "skills_gap": ["Skill A", "Skill B"],
            "learning_path": ["Take course X (4 weeks)", "Build project Y (6 weeks)"],
            "market_trends": ["Growing demand for X", "Remote roles increasing"],
            "salary_estimate": "USD 60k-90k depending on region and experience",
            "next_steps": ["Update resume", "Build 2 portfolio projects", "Apply to 5 roles"]
        }

    # persist to DB
    try:
        cp = CareerProfile.objects.create(
            name=state.get("name", ""),
            email=state.get("email", ""),
            objective=objective,
            resume_text=resume_text,
            result=result,
            raw_session=state.get("qa", [])
        )
        result["_db_id"] = cp.pk
    except Exception:
        result["_db_id"] = None

    # clear session
    request.session.pop('career_state', None)
    request.session.modified = True

    return JsonResponse({"result": result})

def result_pdf(request, pk: int):
    cp = get_object_or_404(CareerProfile, pk=pk)
    buffer = io.BytesIO()
    c = canvas.Canvas(buffer, pagesize=A4)
    width, height = A4
    x = 40
    y = height - 60

    c.setFont("Helvetica-Bold", 18)
    c.drawString(x, y, "Career Mentor Report")
    y -= 28
    c.setFont("Helvetica", 11)
    c.drawString(x, y, f"Name: {cp.name or 'Anonymous'}")
    y -= 16
    c.drawString(x, y, f"Email: {cp.email or ''}")
    y -= 18
    c.drawString(x, y, f"Objective: {cp.objective or ''}")
    y -= 24

    res = cp.result or {}
    c.setFont("Helvetica-Bold", 12)
    c.drawString(x, y, "Summary:")
    y -= 14
    c.setFont("Helvetica", 10)
    c.drawString(x, y, res.get("summary", ""))
    y -= 20

    c.setFont("Helvetica-Bold", 12)
    c.drawString(x, y, "Target Roles:")
    y -= 14
    c.setFont("Helvetica", 10)
    for r in res.get("target_roles", []):
        c.drawString(x + 10, y, f"• {r}")
        y -= 12
        if y < 100:
            c.showPage()
            y = height - 60

    y -= 8
    c.setFont("Helvetica-Bold", 12)
    c.drawString(x, y, "Skills Gap:")
    y -= 14
    c.setFont("Helvetica", 10)
    for s in res.get("skills_gap", []):
        c.drawString(x + 10, y, f"• {s}")
        y -= 12
        if y < 100:
            c.showPage()
            y = height - 60

    y -= 8
    c.setFont("Helvetica-Bold", 12)
    c.drawString(x, y, "Learning Path (top items):")
    y -= 14
    c.setFont("Helvetica", 10)
    for lp in res.get("learning_path", []):
        c.drawString(x + 10, y, f"• {lp}")
        y -= 12
        if y < 100:
            c.showPage()
            y = height - 60

    y -= 18
    c.setFont("Helvetica-Bold", 12)
    c.drawString(x, y, "Next Steps:")
    y -= 14
    c.setFont("Helvetica", 10)
    for ns in res.get("next_steps", []):
        c.drawString(x + 10, y, f"• {ns}")
        y -= 12
        if y < 100:
            c.showPage()
            y = height - 60

    c.showPage()
    c.save()
    buffer.seek(0)
    response = HttpResponse(buffer, content_type="application/pdf")
    response['Content-Disposition'] = f'attachment; filename="career_report_{cp.pk}.pdf"'
    return response
