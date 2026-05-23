import os
import json
import io
from datetime import datetime

from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse, HttpResponseBadRequest, HttpResponse
from django.views.decorators.csrf import csrf_exempt

import openai
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas

from .models import Assessment

openai.api_key = os.environ.get("API")
MODEL_NAME = os.environ.get("OPENAI_MODEL", "gpt-4o-nano")  # change if required

# Pillars and questions (same as earlier)
PILLARS = [
    {"key": "data", "title": "Data Readiness", "questions": [
        "Where does your business store key data today? (e.g., CRM, shared drives, spreadsheets, paper)",
        "How much of your work happens in unstructured formats (PDFs, emails, chats)? (none/some/majority)",
        "Do you have consistent reporting formats? (yes/no/partial)"
    ]},
    {"key": "process", "title": "Process Clarity", "questions": [
        "Which recurring tasks take the most time for your team? (list top 3)",
        "Do you rely on manual reporting or document checks? (none/some/mostly)",
        "Are there approval loops or handoffs that routinely slow work down? (no/occasionally/frequently)"
    ]},
    {"key": "tech", "title": "Technology Infrastructure", "questions": [
        "Do your primary tools expose APIs or data export capabilities? (none/some/all)",
        "Are you using cloud systems (AWS, Azure, GCP) for core workloads? (no/hybrid/yes)",
        "How much of your workflow is digitized? (none/partial/fully)"
    ]},
    {"key": "mindset", "title": "Organizational Mindset", "questions": [
        "How open is leadership to tech adoption? (resistant/curious/proactive)",
        "Are teams willing to revise old workflows? (no/with incentives/yes)"
    ]},
    {"key": "impact", "title": "Impact Opportunities", "questions": [
        "Where do most errors or delays happen today? (list top 3 areas)",
        "What decisions rely heavily on manual interpretation or spreadsheets?"
    ]},
]

def build_questions():
    Qs = []
    for p in PILLARS:
        for q in p["questions"]:
            Qs.append({"pillar": p["key"], "pillar_title": p["title"], "question": q})
    return Qs

ALL_QUESTIONS = build_questions()
TOTAL_QUESTIONS = len(ALL_QUESTIONS)

SCORE_PROMPT_TEMPLATE = (
    "You are an objective scoring assistant. Given this client answer, produce a JSON object "
    "with keys: score (integer 0-5), note (one-line). The scoring scale: 0=very poor, 5=excellent.\n\n"
    "Question: {question}\n\nAnswer: {answer}\n\nReturn only JSON."
)

def assessment_page(request):
    return render(request, "assessments/assessment.html", {})

@csrf_exempt
def api_start_assessment(request):
    request.session['assess_state'] = {"idx": 0, "answers": [], "started_at": datetime.utcnow().isoformat()}
    request.session.modified = True
    first = ALL_QUESTIONS[0]
    return JsonResponse({"next_question": first, "total": TOTAL_QUESTIONS})

@csrf_exempt
def api_answer(request):
    try:
        payload = json.loads(request.body.decode("utf-8"))
        answer_text = payload.get("answer", "").strip()
        client_name = payload.get("client_name", "").strip()
    except Exception:
        return HttpResponseBadRequest("Invalid JSON")

    state = request.session.get("assess_state")
    if not state:
        return JsonResponse({"error": "session_not_initialized"}, status=400)

    idx = state.get("idx", 0)
    if idx >= TOTAL_QUESTIONS:
        return JsonResponse({"error": "already_complete"}, status=400)

    current_q = ALL_QUESTIONS[idx]
    prompt = SCORE_PROMPT_TEMPLATE.format(question=current_q["question"], answer=answer_text)

    # Call OpenAI (ChatCompletion). Adjust if you use a different GPT provider.
    try:
        resp = openai.ChatCompletion.create(
            model=MODEL_NAME,
            messages=[
                {"role": "system", "content": "You are a concise scoring assistant."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=200,
            temperature=0.0,
        )
        text = resp["choices"][0]["message"]["content"].strip()
        scored = json.loads(text)
        score = int(scored.get("score", 0))
        note = scored.get("note", "")
    except Exception:
        # fallback extraction/worst-case defaults
        text = locals().get("text", "")
        import re
        matched = re.search(r"([0-5])", text)
        score = int(matched.group(1)) if matched else 2
        note = text[:200] if text else "scoring-fallback"

    state['answers'].append({
        "idx": idx,
        "pillar": current_q["pillar"],
        "question": current_q["question"],
        "answer": answer_text,
        "score": score,
        "note": note
    })
    state['idx'] = idx + 1
    request.session['assess_state'] = state
    request.session.modified = True

    if state['idx'] < TOTAL_QUESTIONS:
        next_q = ALL_QUESTIONS[state['idx']]
        return JsonResponse({"next_question": next_q, "progress": state['idx'], "total": TOTAL_QUESTIONS})
    else:
        # aggregate
        pillars = {}
        for a in state['answers']:
            p = a['pillar']
            pillars.setdefault(p, {"scores": [], "title": next(x["pillar_title"] for x in ALL_QUESTIONS if x["pillar"]==p)})
            pillars[p]["scores"].append(a['score'])

        pillar_results = {}
        total = 0
        for k, v in pillars.items():
            avg = round(sum(v["scores"]) / len(v["scores"])) if v["scores"] else 0
            pillar_results[k] = {"title": v["title"], "score": int(avg)}
            total += int(avg)

        ai_index = total
        classification = ("Needs Foundation First (0-10)" if ai_index <= 10 else
                          "Ready for Small AI Pilots (11-18)" if ai_index <= 18 else
                          "Fully AI-Ready (19-25)")

        # ask model for recommendations
        rec_prompt = (
            "You are an experienced AI consultant. Given pillar scores: " + json.dumps({k: v["score"] for k, v in pillar_results.items()})
            + "\nReturn JSON: {\"opportunities\": [..], \"leak\": \"...\", \"roadmap\": {\"30_day\":\"\",\"90_day\":\"\",\"6_month\":\"\"}}"
        )
        try:
            rec_resp = openai.ChatCompletion.create(
                model=MODEL_NAME,
                messages=[
                    {"role": "system", "content": "You are a succinct enterprise AI consultant."},
                    {"role": "user", "content": rec_prompt},
                ],
                max_tokens=300,
                temperature=0.2,
            )
            rec_text = rec_resp["choices"][0]["message"]["content"].strip()
            recommendations = json.loads(rec_text)
        except Exception:
            recommendations = {
                "opportunities": ["Consolidate core data", "Automate top repetitive task", "Pilot RAG on docs"],
                "leak": "Disconnected data and manual reporting",
                "roadmap": {"30_day": "Run pilot", "90_day": "Integrate and measure", "6_month": "Scale"}
            }

        result = {
            "pillars": pillar_results,
            "ai_index": ai_index,
            "classification": classification,
            "recommendations": recommendations,
            "answers": state['answers']
        }

        try:
            assessment = Assessment.objects.create(
                client_name=client_name or "",
                results=result,
                raw_answers=state['answers']
            )
            result["_db_id"] = assessment.pk
        except Exception:
            result["_db_id"] = None

        request.session.pop('assess_state', None)
        request.session.modified = True

        return JsonResponse({"result": result})

def result_pdf(request, pk: int):
    assessment = get_object_or_404(Assessment, pk=pk)
    buffer = io.BytesIO()
    c = canvas.Canvas(buffer, pagesize=A4)
    width, height = A4
    x = 40
    y = height - 60

    c.setFont("Helvetica-Bold", 18)
    c.drawString(x, y, "Aurbient AI Readiness Assessment Report")
    y -= 30
    c.setFont("Helvetica", 10)
    c.drawString(x, y, f"Client: {assessment.client_name or 'Anonymous'}")
    y -= 18
    c.drawString(x, y, f"Date: {assessment.created_at.isoformat()}")
    y -= 28

    c.setFont("Helvetica-Bold", 12)
    c.drawString(x, y, f"AI Readiness Index: {assessment.results.get('ai_index')}")
    y -= 22

    c.setFont("Helvetica-Bold", 11)
    c.drawString(x, y, "Pillar Scores:")
    y -= 16
    c.setFont("Helvetica", 10)
    for k, v in assessment.results.get("pillars", {}).items():
        c.drawString(x + 10, y, f"- {v.get('title')}: {v.get('score')}/5")
        y -= 14
        if y < 100:
            c.showPage()
            y = height - 60

    y -= 8
    c.setFont("Helvetica-Bold", 11)
    c.drawString(x, y, "Top Opportunities:")
    y -= 16
    c.setFont("Helvetica", 10)
    for opp in assessment.results.get("recommendations", {}).get("opportunities", []):
        c.drawString(x + 10, y, f"• {opp}")
        y -= 12
        if y < 100:
            c.showPage()
            y = height - 60

    c.showPage()
    c.save()
    buffer.seek(0)
    response = HttpResponse(buffer, content_type="application/pdf")
    response['Content-Disposition'] = f'attachment; filename="ai_readiness_{assessment.pk}.pdf"'
    return response
