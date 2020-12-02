from django.db import models
from django.utils.translation import ugettext_lazy as _


class NextSale(models.Model):
    SALE_LUNAR = "LUNAR"
    SALE_SPRING = "SPRING"
    SALE_SUMMER = "SUMMER"
    SALE_HALLOWEEN = "HALLOWEEN"
    SALE_AUTUMN = "AUTUMN"
    SALE_WINTER = "WINTER"

    SALE_CHOICES = (
        (SALE_LUNAR, _('Lunar New Year')),
        (SALE_SPRING, _('Spring Sale')),
        (SALE_SUMMER, _('Summer Sale')),
        (SALE_HALLOWEEN, _('Halloween Sale')),
        (SALE_AUTUMN, _('Autumn Sale')),
        (SALE_WINTER, _('Winter Sale'))
    )

    name = models.CharField(_('name'), max_length=20, choices=SALE_CHOICES, unique=True)
    sale_date = models.DateField(_('sale date'))
    end_date = models.DateField(_('end date'))
    in_sale = models.BooleanField(_('in sale'), default=False)
    approved = models.BooleanField(_('approved'), default=False)
    is_enable = models.BooleanField(_('is enable'), default=True)
    created_time = models.DateTimeField(_('created time'), auto_now_add=True)
    updated_time = models.DateTimeField(_('updated time'), auto_now=True)
