from django.contrib import admin
from .models import Assessment

@admin.register(Assessment)
class AssessmentAdmin(admin.ModelAdmin):
    list_display = ("client_name", "created_at")
    readonly_fields = ("created_at",)
    search_fields = ("client_name",)
