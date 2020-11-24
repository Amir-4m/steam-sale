from rest_framework import serializers

from apps.accounts.models import Account
from apps.giveaways.models import Giveaway


class GiveawaySerializer(serializers.Serializer):
    email = serializers.EmailField()

    def validate(self, attrs):
        email = attrs['email']
        user = Account.objects.filter(email=attrs['email']).first()
        if user is None:
            user = Account.objects.create(email=email, is_subscriber=True)
        Giveaway.objects.last().registered_users.add(user)
        return attrs
