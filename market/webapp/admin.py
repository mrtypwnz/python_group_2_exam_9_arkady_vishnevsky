from django.contrib import admin
from webapp.models import Product, Photo, Category, Order

#
# class MovieAdmin(admin.ModelAdmin):
#     list_display = ['pk', 'name']
#     search_fields = ['name', 'id']


class ProductAdmin(admin.ModelAdmin):
    filter_horizontal = ('categories',)


class OrderAdmin(admin.ModelAdmin):
    filter_horizontal = ('product',)


def list_admin_with_pk(*fields):
    class PkListAdmin(admin.ModelAdmin):
        list_display = ['pk'] + list(fields)

    return PkListAdmin


class RegistrationTokenAdmin(admin.ModelAdmin):
    list_display = ['pk', 'user']
    readonly_fields = ['token']


admin.site.register(Product, ProductAdmin)
admin.site.register(Photo, list_admin_with_pk('product'))
admin.site.register(Category, list_admin_with_pk('name'))
admin.site.register(Order, OrderAdmin)