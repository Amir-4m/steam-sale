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
        (SALE_LUNAR, _('Lunar')),
        (SALE_SPRING, _('Spring')),
        (SALE_SUMMER, _('Summer')),
        (SALE_HALLOWEEN, _('Halloween')),
        (SALE_AUTUMN, _('Autumn')),
        (SALE_WINTER, _('Winter'))
    )

    name = models.CharField(_('name'), max_length=20, choices=SALE_CHOICES, unique=True)
    sale_date = models.DateField(_('sale date'))
    approved = models.BooleanField(_('approved'), default=False)
    is_enable = models.BooleanField(_('is_enable'), default=True)
