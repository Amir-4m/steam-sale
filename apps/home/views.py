import base64
from urllib.parse import unquote

from django.contrib.sites.models import Site
from django.urls import reverse
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_control, cache_page
from django.views.decorators.vary import vary_on_cookie
from django.views.generic import TemplateView

from apps.giveaways.models import Giveaway
from apps.accounts.models import Account

from .models import NextSale


# @method_decorator(cache_control(max_age=1 * 24 * 60 * 60), name='get')  # 1 day
# @method_decorator(cache_page(1 * 24 * 60 * 60), name='get')  # 1 day
# @method_decorator(vary_on_cookie, name='get')
class HomeView(TemplateView):
    template_name = 'home/index.html'

    def get_context_data(self, **kwargs):
        user = None
        inv_code = self.request.GET.get('ic')
        uid = self.request.COOKIES.get('s_uid')
        if uid is not None:
            email = str(base64.b64decode(bytes(unquote(uid), 'utf-8')), 'utf-8')
            try:
                user = Account.objects.get(email=email)
            except Account.DoesNotExist:
                pass
        if inv_code is not None:
            giveaway_api_url = f'{self.request.build_absolute_uri(reverse("register"))}?ic={inv_code}'
        else:
            giveaway_api_url = self.request.build_absolute_uri(reverse("register"))
        context = super(HomeView, self).get_context_data(**kwargs)
        context.update({
            "sale": NextSale.objects.order_by('sale_date').filter(is_enable=True).first(),
            "giveaway": Giveaway.objects.last(),
            "newsletter_api_url": reverse('subscribe'),
            "giveaway_api_url": giveaway_api_url,
            "user": user,
            "description": " Find out and check the next steam sale out and get free monthly incredible giveaways!",
            "site": Site.objects.first(),
            "invitation_code": inv_code
        })
        return context
