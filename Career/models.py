from django.db import models

class CareerProfile(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    objective = models.TextField(blank=True, null=True)
    resume_text = models.TextField(blank=True, null=True)
    result = models.JSONField(null=True, blank=True)   # GPT output
    raw_session = models.JSONField(null=True, blank=True)  # saved Q/A
    file = models.FileField(upload_to='career_resumes/', null=True, blank=True)

    def __str__(self):
        return f"{self.name or 'Anonymous'} - {self.created_at.isoformat()}"
