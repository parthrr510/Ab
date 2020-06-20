# module level imports
from .serializers import ResourceSerializer
from .permissions import IsOwnerOrReadOnly
from panel.models import Resource

# other imports
from django.conf import settings
import jwt

# rest_framework
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response


def jwt_decoder(encoded_token):
    return jwt.decode(encoded_token, settings.SECRET_KEY, algorithms=["HS256"])


class ResourceView(APIView):
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]

    def get(self, request, *args, **kwargs):
        payload = jwt_decoder(self.request.headers["Authorization"].split()[1])
        instance = Resource.objects.get(team_id=payload["user_id"])
        serializer = ResourceSerializer(instance)
        return Response(serializer.data)
