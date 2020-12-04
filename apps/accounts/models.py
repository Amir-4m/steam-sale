from django.db import models


class Account(models.Model):
    email = models.EmailField()
    # steam_id = models.CharField(max_length=120, unique=True, null=True)
    invitation_code = models.URLField(null=True, blank=False)
    is_subscriber = models.BooleanField(default=False)
    created_time = models.DateTimeField(auto_now_add=True)
    updated_time = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ('email', 'invitation_code')

    def referred_accounts(self):
        return Referred.objects.filter(referrer=self).count()


class Referred(models.Model):
    referrer = models.ForeignKey(Account, on_delete=models.CASCADE, related_name='referrers')
    account = models.ForeignKey(Account, on_delete=models.CASCADE, related_name='referred')
    created_time = models.DateTimeField(auto_now_add=True)
