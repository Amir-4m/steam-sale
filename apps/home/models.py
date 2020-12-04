from django.db import models
from django.utils.translation import ugettext_lazy as _


class NextSale(models.Model):
    name = models.CharField(_('name'), max_length=20, unique=True)
    sale_date = models.DateField(_('sale date'))
    end_date = models.DateField(_('end date'))
    in_sale = models.BooleanField(_('in sale'), default=False)
    approved = models.BooleanField(_('approved'), default=False)
    is_enable = models.BooleanField(_('is enable'), default=True)
    created_time = models.DateTimeField(_('created time'), auto_now_add=True)
    updated_time = models.DateTimeField(_('updated time'), auto_now=True)
