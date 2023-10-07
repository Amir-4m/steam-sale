from django.contrib import admin
from .models import Giveaway


@admin.register(Giveaway)
class NextSaleAdmin(admin.ModelAdmin):
    list_display = ('name', 'is_enable')
