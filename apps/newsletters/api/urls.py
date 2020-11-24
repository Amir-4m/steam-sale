from django.urls import path
from .views import NewsletterApiView

urlpatterns = [
    path('subscribe/', NewsletterApiView.as_view(), name='subscribe'),
]
