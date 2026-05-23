from django.urls import path
from . import views

app_name = "career"

urlpatterns = [
    path("", views.career_page, name="page"),
    path("api/start/", views.api_start, name="api_start"),
    path("api/submit_profile/", views.api_submit_profile, name="api_submit_profile"),
    path("api/question/", views.api_question, name="api_question"),
    path("api/result/pdf/<int:pk>/", views.result_pdf, name="result_pdf"),
]
