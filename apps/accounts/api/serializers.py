from rest_framework import serializers

from apps.accounts.models import Account


class AccountSerializer(serializers.Serializer):
    email = serializers.EmailField()
    is_subscriber = serializers.BooleanField(allow_null=True)

    def validate(self, attrs):
        email = attrs['email']
        is_subscriber = attrs.get('is_subscriber')
        qs = Account.objects.filter(email=attrs['email'])
        if qs.exists():
            qs.update(is_subscriber=is_subscriber)
        else:
            Account.objects.create(email=email, is_subscriber=is_subscriber)
        return attrs
