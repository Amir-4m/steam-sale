from django.urls import path
from .views import GiveawayApiView

urlpatterns = [
    path('register/', GiveawayApiView.as_view(), name='register'),
]
