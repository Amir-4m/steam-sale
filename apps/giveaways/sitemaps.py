from django.contrib.sitemaps import Sitemap
from django.urls import reverse

from .models import Giveaway


class GiveawaySitemap(Sitemap):
    changefreq = "monthly"
    priority = 0.9

    def items(self):
        return Giveaway.objects.all()

    def lastmod(self, obj):
        return obj.updated_time

    def location(self, item):
        return reverse("home") + '#steam-giveaway'
