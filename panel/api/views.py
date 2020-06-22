# module level imports
from .serializers import ResourceSerializer, LeaderBoardSerializer, TradeSerializer
from .permissions import IsOwnerOrReadOnly
from panel.models import Resource, Trade

# other imports
from django.conf import settings
import jwt

# rest_framework
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
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


class LeaderBoard(APIView):
    permission_classes = [
        AllowAny,
    ]

    def get(self, request, *args, **kwargs):
        instance = Resource.objects.all()
        serializer = LeaderBoardSerializer(
            instance, many=True, context={"request": request}
        )
        return Response(serializer.data)


class Trade(CreateAPIView):
    queryset = Trade.objects.all()
    serializer_class = TradeSerializer
    permission_classes = [
        IsAuthenticated,
    ]
