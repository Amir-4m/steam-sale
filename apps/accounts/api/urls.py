from django.urls import path
from .views import AccountApiView

urlpatterns = [
    path('verify/', AccountApiView.as_view(), name='verify'),
]
