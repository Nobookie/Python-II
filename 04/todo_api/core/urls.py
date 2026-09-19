# Arquivo: core/urls.py

from django.urls import path
from .views import index, register_view, current_user_view

urlpatterns = [
    path('register', register_view, name='register'),
    path('user-auth', current_user_view, name='current-user')

]

