from rest_framework import serializers

from apps.accounts.models import Account


class NewsletterSerializer(serializers.Serializer):
    email = serializers.EmailField()

    def validate(self, attrs):
        email = attrs['email']
        user = Account.objects.filter(email=attrs['email']).first()
        if user is not None:
            user.is_subscriber = True
            user.save()
        else:
            Account.objects.create(email=email, is_subscriber=True)
        return attrs
