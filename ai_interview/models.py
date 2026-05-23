from django.db import models

class InterviewSession(models.Model):
    TRACK_CHOICES = [
        ('hr', 'HR Interview'),
        ('tech', 'Technical Interview'),
    ]

    created_at = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    track = models.CharField(max_length=16, choices=TRACK_CHOICES, default='hr')
    transcript = models.TextField(blank=True, null=True)   # full captured speech/text
    qa = models.JSONField(null=True, blank=True)           # list of {"q":.., "a":.., "score":..}
    evaluation = models.JSONField(null=True, blank=True)   # final LLM evaluation/recommendations

    def __str__(self):
        return f"{self.track} - {self.name or 'anon'} - {self.created_at.isoformat()}"
