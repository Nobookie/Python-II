from django.urls import path
from .views import *

app_name = 'churras'

urlpatterns = [
    path('', index, name='index'),
    path('buscar', buscar, name='buscar'),
    path('<int:id>/<slug:nome_prato>', churrasco, name='churrasco')
]