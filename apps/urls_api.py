from django.urls import path, include

urlpatterns = [
    path('giveaway/', include("apps.giveaways.api.urls")),
    path('newsletters/', include("apps.newsletters.api.urls")),

]
