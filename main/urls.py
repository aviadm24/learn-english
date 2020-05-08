from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('', TemplateView.as_view(template_name="home.html")),
    path('index', TemplateView.as_view(template_name="index.html")),
    path('levels', TemplateView.as_view(template_name="index.html")),
    path('level1/topics', TemplateView.as_view(template_name="topics.html")),
    path('level1/topic1/classes', TemplateView.as_view(template_name="classes.html")),
]
