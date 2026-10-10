from django.urls import path
from .views import *

app_name = 'churras'

urlpatterns = [
    path('', index, name='index'),
    path('busca', buscar, name='buscar'),
    path('prato/<int:id>/<slug:nome_prato>', churrasco, name='churrasco')
]