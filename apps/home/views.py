from django.views.generic import TemplateView
from .models import NextSale


class HomeView(TemplateView):
    template_name = 'home/index.html'

    def get_context_data(self, **kwargs):
        context = super(HomeView, self).get_context_data(**kwargs)
        context.update({
            "sale": NextSale.objects.order_by('-sale_date').first()
        })
        return context
