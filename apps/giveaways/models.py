from django.db import models
from django.utils.translation import gettext_lazy as _

from apps.accounts.models import Account


class Giveaway(models.Model):
    name = models.CharField(_('name'), max_length=120, blank=False)
    company = models.CharField(_('company'), max_length=120, blank=False)
    image = models.ImageField(_('image'), upload_to='giveaway/images', null=True, blank=True)
    winner = models.ForeignKey(Account, on_delete=models.CASCADE, related_name='won_giveaways', blank=True, null=True)
    registered_users = models.ManyToManyField(Account, related_name='registered_giveaways', blank=True)
    is_enable = models.BooleanField(default=True)
    start_date = models.DateField(_('start date'))
    end_date = models.DateField(_('end date'))
    announce_date = models.DateField(_('announce date'))
    created_time = models.DateTimeField(_('created time'), auto_now_add=True)
    updated_time = models.DateTimeField(_('updated time'), auto_now=True)
