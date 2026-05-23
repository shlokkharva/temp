from django.urls import path
from . import views

app_name = "assessments"

urlpatterns = [
    path("", views.assessment_page, name="page"),
    path("api/start/", views.api_start_assessment, name="api_start"),
    path("api/answer/", views.api_answer, name="api_answer"),
    path("api/result/pdf/<int:pk>/", views.result_pdf, name="result_pdf"),
]
