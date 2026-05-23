import os
import json
import io
from datetime import datetime

from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse, HttpResponseBadRequest, HttpResponse
from django.views.decorators.csrf import csrf_exempt

import openai
openai.api_key = os.environ.get("API")
if not openai.api_key:
    raise RuntimeError("OPENAI_API_KEY environment variable is not set")
MODEL_NAME = os.environ.get("OPENAI_MODEL", "gpt-4o-nano")

from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas

from .models import InterviewSession

# Simple question pools used as fallback or seed
HR_SEED = [
    "Tell me about yourself and your background.",
    "Why are you interested in this role?",
    "Describe a challenge you faced and how you resolved it."
]

TECH_SEED = [
    "Describe a recent technical project you built and your role in it.",
    "How do you approach debugging a complex issue?",
    "Explain a data structure you use frequently and why."
]

# Helper: prompt LLM to propose next question / score an answer
NEXT_Q_PROMPT = (
    "You are an interview conductor. Given the track ({track}) and prior Q/A: {qa}\n"
    "If there are more clarifying questions that would help evaluate the candidate, return a JSON: {\"next_question\": \"...\"}.\n"
    "If ready to evaluate, return {\"next_question\": null}."
)

SCORE_PROMPT = (
    "You are an objective interview scorer. Given this question and candidate answer, "
    "return JSON {\"score\": <0-5>, \"note\": \"one-line rationale\"}.\n"
    "Question: {question}\nAnswer: {answer}"
)

EVAL_PROMPT = (
    "You are an experienced interviewer. Given the interview QA list: {qa}\n"
    "Provide a JSON result:\n"
    "{\n"
    "  \"summary\": \"one-line summary\",\n"
    "  \"strengths\": [..],\n"
    "  \"areas_for_improvement\": [..],\n"
    "  \"recommendation\": \"hire / consider / not-hire\",\n"
    "  \"advice\": [..]\n"
    "}\n"
)

def interview_page(request):
    return render(request, "ai_interview/interview.html", {})

@csrf_exempt
def api_start(request):
    """
    Initialize session with track and optional name/email. Returns first question.
    """
    try:
        payload = json.loads(request.body.decode("utf-8"))
        track = payload.get("track", "hr")
        name = payload.get("name", "")
        email = payload.get("email", "")
    except Exception:
        track = "hr"; name = ""; email = ""

    # start server-side session state
    request.session['ai_interview_state'] = {
        "track": track,
        "name": name,
        "email": email,
        "qa": []
    }
    request.session.modified = True

    # choose initial question from seeds
    first_q = HR_SEED[0] if track == "hr" else TECH_SEED[0]
    return JsonResponse({"next_question": first_q, "track": track})

@csrf_exempt
def api_question(request):
    """
    Ask model whether to continue questioning or finish (simple flow).
    Returns {"next_question": "..." } or {"next_question": null}
    """
    state = request.session.get("ai_interview_state")
    if not state:
        return JsonResponse({"error": "session_not_initialized"}, status=400)

    qa = state.get("qa", [])
    track = state.get("track", "hr")
    try:
        prompt = NEXT_Q_PROMPT.format(track=track, qa=json.dumps(qa[-6:]))  # last 6 Q/A
        resp = openai.ChatCompletion.create(
            model=MODEL_NAME,
            messages=[
                {"role":"system", "content":"You are a polite interviewer."},
                {"role":"user", "content": prompt}
            ],
            max_tokens=200,
            temperature=0.2
        )
        text = resp["choices"][0]["message"]["content"].strip()
        try:
            parsed = json.loads(text)
            next_q = parsed.get("next_question")
        except Exception:
            # fallback: if QA length < 5, pick seed; else finish
            next_q = None if len(qa) >= 5 else (HR_SEED[len(qa)] if track=="hr" and len(qa) < len(HR_SEED) else (TECH_SEED[len(qa)] if track=="tech" and len(qa) < len(TECH_SEED) else None))
    except Exception:
        next_q = None if len(qa) >= 5 else (HR_SEED[len(qa)] if track=="hr" and len(qa) < len(HR_SEED) else (TECH_SEED[len(qa)] if track=="tech" and len(qa) < len(TECH_SEED) else None))

    return JsonResponse({"next_question": next_q})

@csrf_exempt
def api_submit_answer(request):
    """
    Accept { question, answer, transcript } — score the answer, append to session.
    If interview completes (client will call api_question to check), evaluation is done with EVAL_PROMPT.
    """
    try:
        payload = json.loads(request.body.decode("utf-8"))
        question = payload.get("question", "")
        answer = payload.get("answer", "")
        transcript = payload.get("transcript", "")  # optional raw captured text
    except Exception:
        return HttpResponseBadRequest("invalid-json")

    state = request.session.get("ai_interview_state")
    if not state:
        return JsonResponse({"error": "session_not_initialized"}, status=400)

    # score with LLM
    try:
        score_resp = openai.ChatCompletion.create(
            model=MODEL_NAME,
            messages=[
                {"role":"system", "content":"You are an objective scorer."},
                {"role":"user", "content": SCORE_PROMPT.format(question=question, answer=answer)}
            ],
            max_tokens=60,
            temperature=0.0
        )
        text = score_resp["choices"][0]["message"]["content"].strip()
        try:
            scored = json.loads(text)
            score = int(scored.get("score", 0))
            note = scored.get("note", "")
        except Exception:
            import re
            m = re.search(r"([0-5])", text)
            score = int(m.group(1)) if m else 3
            note = text[:200]
    except Exception:
        score = 3
        note = "scoring-fallback"

    # append QA
    state.setdefault("qa", []).append({"q": question, "a": answer, "score": score, "note": note})
    # accumulate transcript
    if transcript:
        prev = state.get("transcript", "")
        state["transcript"] = (prev + "\n" + transcript).strip()
    request.session['ai_interview_state'] = state
    request.session.modified = True

    # Save intermediate session to DB optionally (not required)
    return JsonResponse({"score": score, "note": note})

@csrf_exempt
def finalize_and_evaluate(state):
    """
    Internal helper: call LLM to evaluate session.
    """
    qa = state.get("qa", [])
    try:
        resp = openai.ChatCompletion.create(
            model=MODEL_NAME,
            messages=[
                {"role":"system","content":"You are an expert interviewer who gives concise actionable feedback."},
                {"role":"user","content": EVAL_PROMPT.format(qa=json.dumps(qa))}
            ],
            max_tokens=600,
            temperature=0.2
        )
        text = resp["choices"][0]["message"]["content"].strip()
        try:
            parsed = json.loads(text)
            return parsed
        except Exception:
            # fallback simple summary
            return {
                "summary": f"Interviewed with {len(qa)} answers.",
                "strengths": [],
                "areas_for_improvement": [],
                "recommendation": "consider",
                "advice": []
            }
    except Exception:
        return {
            "summary": f"Interviewed with {len(qa)} answers.",
            "strengths": [],
            "areas_for_improvement": [],
            "recommendation": "consider",
            "advice": []
        }

@csrf_exempt
def api_question_and_finalize(request):
    """
    Optional endpoint to ask the model whether to finalize and, if final, evaluate and persist.
    (Not required by frontend; included if you prefer a single call.)
    """
    state = request.session.get("ai_interview_state")
    if not state:
        return JsonResponse({"error":"session_not_initialized"}, status=400)

    # decide to finalize here if QA length >= 5
    if len(state.get("qa", [])) >= 5:
        evaluation = finalize_and_evaluate(state)
        # persist
        try:
            it = InterviewSession.objects.create(
                name=state.get("name",""),
                email=state.get("email",""),
                track=state.get("track","hr"),
                transcript=state.get("transcript",""),
                qa=state.get("qa",[]),
                evaluation=evaluation
            )
            # clear session
            request.session.pop('ai_interview_state', None)
            request.session.modified = True
            return JsonResponse({"result": evaluation, "_db_id": it.pk})
        except Exception:
            return JsonResponse({"result": evaluation, "_db_id": None})
    else:
        return JsonResponse({"message":"not_ready", "needed": 5 - len(state.get("qa", []))})

@csrf_exempt
def result_pdf(request, pk: int):
    it = get_object_or_404(InterviewSession, pk=pk)
    buffer = io.BytesIO()
    c = canvas.Canvas(buffer, pagesize=A4)
    width, height = A4
    x = 40
    y = height - 60

    c.setFont("Helvetica-Bold", 16)
    c.drawString(x, y, "AI Interview Summary")
    y -= 24
    c.setFont("Helvetica", 10)
    c.drawString(x, y, f"Name: {it.name or 'Anonymous'}")
    y -= 14
    c.drawString(x, y, f"Track: {it.get_track_display() if hasattr(it,'get_track_display') else it.track}")
    y -= 18

    c.setFont("Helvetica-Bold", 12)
    c.drawString(x, y, "Summary:")
    y -= 14
    c.setFont("Helvetica", 10)
    evald = it.evaluation or {}
    c.drawString(x, y, evald.get("summary", ""))
    y -= 18

    c.setFont("Helvetica-Bold", 12)
    c.drawString(x, y, "QA (short):")
    y -= 14
    c.setFont("Helvetica", 10)
    for qa in (it.qa or [])[:30]:
        line = f"Q: {qa.get('q','')[:80]} A: {qa.get('a','')[:120]} (score:{qa.get('score')})"
        c.drawString(x+6, y, line)
        y -= 12
        if y < 80:
            c.showPage(); y = height - 60

    c.showPage()
    c.save()
    buffer.seek(0)
    response = HttpResponse(buffer, content_type="application/pdf")
    response['Content-Disposition'] = f'attachment; filename="ai_interview_{it.pk}.pdf"'
    return response
