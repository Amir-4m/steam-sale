from django.contrib import admin
from .models import Account


@admin.register(Account)
class NextSaleAdmin(admin.ModelAdmin):
    list_display = ('email', 'referred_accounts')
