from django.urls import path
from . import views

app_name = "ai_interview"

urlpatterns = [
    path("", views.interview_page, name="page"),
    path("api/start/", views.api_start, name="api_start"),
    path("api/question/", views.api_question, name="api_question"),
    path("api/submit_answer/", views.api_submit_answer, name="api_submit_answer"),
    # Add this line:
    path("api/finalize/", views.api_question_and_finalize, name="api_question_and_finalize"),
    path("api/result/pdf/<int:pk>/", views.result_pdf, name="result_pdf"),
]
