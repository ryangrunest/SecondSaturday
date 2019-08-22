# from django.shortcuts import render
# from django.http import HttpResponse

# # Create your views here.
# def index(request):
#   return HttpResponse("Hello, world. You're at the blog index.")


from blog.models import Blog
from blog.serializers import BlogSerializer
from rest_framework import generics

class BlogListCreate(generics.ListCreateAPIView):
  queryset = Blog.objects.all()
  serializer_class = BlogSerializer