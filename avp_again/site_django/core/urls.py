from django.contrib import admin
from django.urls import path, include
from site_django import views

vue_urls = [
  path('', views.frontend),
  path('another-path/', views.frontend),
]

urlpatterns = [
  path('', include(vue_urls)),
]