from django.contrib import admin


class MovieAdmin(admin.ModelAdmin):
    list_display = ['pk', 'name']
    search_fields = ['name', 'id']


def list_admin_with_pk(*fields):
    class PkListAdmin(admin.ModelAdmin):
        list_display = ['pk'] + list(fields)
    return PkListAdmin


class RegistrationTokenAdmin(admin.ModelAdmin):
    list_display = ['pk', 'user']
    readonly_fields = ['token']


