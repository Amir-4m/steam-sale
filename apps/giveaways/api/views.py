import base64

from rest_framework import views
from rest_framework.response import Response

from .serializers import GiveawaySerializer


class GiveawayApiView(views.APIView):

    def post(self, request, *args, **kwargs):
        serializer = GiveawaySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        encoded = base64.b64encode(serializer.validated_data['email'].encode('ascii'))
        return Response({'token': encoded})
