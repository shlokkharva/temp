from django.contrib import admin
from .models import CareerProfile

@admin.register(CareerProfile)
class CareerProfileAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "created_at")
    readonly_fields = ("created_at",)
    search_fields = ("name", "email")
