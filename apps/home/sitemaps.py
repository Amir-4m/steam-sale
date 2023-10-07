from django.contrib.sitemaps import Sitemap
from django.urls import reverse

from .models import NextSale


class SaleSitemap(Sitemap):
    changefreq = "monthly"
    priority = 1.0

    def items(self):
        return NextSale.objects.filter(is_enable=True)

    def lastmod(self, obj):
        return obj.updated_time

    def location(self, item):
        return reverse("home") + '#next-sale'
