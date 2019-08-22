from django.db import models

# Create your models here.
class Blog(models.Model):
  blog_author = models.CharField(max_length=50)
  blog_text = models.TextField()
  pub_date = models.DateTimeField('date published')