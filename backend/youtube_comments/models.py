from tkinter import CASCADE
from django.db import models
from authentication.models import User

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    video_id = models.CharField(max_length=30)
    text = models.CharField(max_length=30)
    likes = models.IntegerField()
    dislikes = models.IntegerField()

