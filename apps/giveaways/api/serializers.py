from rest_framework import serializers

from apps.accounts.models import Account, Referred
from apps.giveaways.models import Giveaway


class GiveawaySerializer(serializers.Serializer):
    email = serializers.EmailField()

    def validate(self, attrs):
        email = attrs['email']
        user = Account.objects.filter(email=attrs['email']).first()
        if user is None:
            user = Account.objects.create(email=email, is_subscriber=True)
        request = self.context['request']
        ic = request.query_params.get('ic')
        if ic is not None:
            try:
                referrer = Account.objects.get(invitation_code=ic)
                Referred.objects.create(referrer=referrer, account=user)
            except Account.DoesNotExist:
                pass
        attrs.update({'ic': user.invitation_code})
        Giveaway.objects.last().registered_users.add(user)
        return attrs
