from django.contrib import admin
from .models import NextSale


@admin.register(NextSale)
class NextSaleAdmin(admin.ModelAdmin):
    list_display = ('name', 'approved', 'sale_date', 'is_enable')
