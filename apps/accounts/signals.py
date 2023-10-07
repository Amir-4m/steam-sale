import logging
from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Account
from .utils import UrlEncoder

logger = logging.getLogger(__name__)


@receiver(post_save, sender=Account)
def account_receiver(sender, instance, created, raw=False, **kwargs):
    if created and not raw:
        invitation_code = UrlEncoder().encode_id(instance.id)
        Account.objects.filter(id=instance.id).update(invitation_code=invitation_code)
