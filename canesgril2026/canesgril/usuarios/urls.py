from django.urls import path
from usuarios.views import (
    cadastro, login_view, dashboard, logout_view, 
    cria_prato, edita_prato, atualiza_prato, deleta_prato,
    edita_perfil, altera_senha # Novas importações
)

app_name = 'usuarios'

urlpatterns = [
    path('cadastrar', cadastro, name='cadastro'), 
    path('logar', login_view, name='login'),
    path('painel', dashboard, name='dashboard'), 
    path('logout', logout_view, name='logout'),
    path('criar', cria_prato, name='cria_prato'),
    path('deletar/<int:prato_id>/<slug:nome_prato>', deleta_prato, name='deleta_prato'),
    path('editar/<int:prato_id>/<slug:nome_prato>', edita_prato, name='edita_prato'),
    path('atualizar', atualiza_prato, name='atualiza_prato'),
    
    # NOVAS ROTAS: Controle de Perfil do Usuário
    path('perfil/editar', edita_perfil, name='edita_perfil'),
    path('perfil/senha', altera_senha, name='altera_senha'),
]