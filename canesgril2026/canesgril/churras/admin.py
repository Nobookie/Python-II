from django.contrib import admin
from .models import Prato
from decouple import config

class ListandoPratos(admin.ModelAdmin):
    list_display = ('id', 'nome_prato', 'categoria', 'tempo_preparo', 'publicado')
    list_display_links = ('id', 'nome_prato')
    search_fields = ('nome_prato','categoria')
    list_filter = ('nome_prato', 'categoria','publicado')
    list_editable = ('publicado',)
    list_per_page = 20
    actions = ['marcar_como_publicado']

    def marcar_como_publicado(self, request, queryset):
        atualizados = queryset.update(publicado=True)
        self.message_user(request, f"{atualizados} pratos foram marcados como publicados.")
    marcar_como_publicado.short_description = "Publicar Todos"

# Register your models here.
admin.site.register(Prato, ListandoPratos,)

admin.site.site_header = config('APP_NAME', default='Canesgril', cast=str)
admin.site.site_title = config('APP_NAME', default='Canesgril', cast=str)
admin.site.index_title = "Início"