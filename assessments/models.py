from django.db import models

class Assessment(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    client_name = models.CharField(max_length=255, blank=True, null=True)
    results = models.JSONField()
    raw_answers = models.JSONField(null=True, blank=True)

    def __str__(self):
        return f"{self.client_name or 'Anonymous'} - {self.created_at.isoformat()}"
