from django.contrib import admin
from .models import InterviewSession

@admin.register(InterviewSession)
class InterviewSessionAdmin(admin.ModelAdmin):
    list_display = ("name", "track", "created_at")
    readonly_fields = ("created_at",)
    search_fields = ("name", "email")
