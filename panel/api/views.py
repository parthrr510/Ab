# module level imports
from .serializers import ResourceSerializer, LeaderBoardSerializer, TradeSerializer
from .permissions import IsOwnerOrReadOnly
from panel.models import Resource, Trade
from users.models import MyUser

# other imports
from django.conf import settings
import jwt
from decimal import Decimal
from django.core.mail import send_mail

# rest_framework
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response


def jwt_decoder(encoded_token):
    return jwt.decode(encoded_token, settings.SECRET_KEY, algorithms=["HS256"])


def incResources(obj):
    resource = Resource.objects.get(team_id=obj["to_team"])
    if obj["mscBits"]:
        resource.mscBits = resource.mscBits + Decimal(obj["mscBits"].strip())
    if obj["food"]:
        resource.food = resource.food + Decimal(obj["food"].strip())
    if obj["medicine"]:
        resource.medicine = resource.medicine + Decimal(obj["medicine"].strip())
    if obj["technology"]:
        resource.technology = resource.technology + Decimal(obj["technology"].strip())
    resource.GDP = (
        resource.mscBits
        + resource.food * (Decimal(0.75))
        + resource.medicine * (Decimal(0.8))
        + resource.technology * (Decimal(2))
    )
    resource.save()


def decResources(obj, user):
    resource = Resource.objects.get(team_id=user)
    if obj["mscBits"]:
        resource.mscBits = resource.mscBits - Decimal(obj["mscBits"].strip())
    if obj["food"]:
        resource.food = resource.food - Decimal(obj["food"].strip())
    if obj["medicine"]:
        resource.medicine = resource.medicine - Decimal(obj["medicine"].strip())
    if obj["technology"]:
        resource.technology = resource.technology - Decimal(obj["technology"].strip())
    resource.GDP = (
        resource.mscBits
        + resource.food * (Decimal(0.75))
        + resource.medicine * (Decimal(0.8))
        + resource.technology * (Decimal(2))
    )
    resource.save()


def trade_success(trade_from, trade_to):
    arr = []
    from_team = MyUser.objects.get(id=trade_from)
    to_team = MyUser.objects.get(id=trade_to)
    arr.append(from_team)
    arr.append(to_team)
    for team in arr:
        subject = "Trade successful!"
        message = f"Hello team {team.team_name},\n\nTrade has been performed successfully. If you have any doubts regarding the same, contact us on Discord.\n\nCheers,\nTeam MSC."
        email_from = settings.EMAIL_HOST_USER
        recipient_list = [
            team.email,
        ]
        send_mail(subject, message, email_from, recipient_list)


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

    def perform_create(self, serializer):
        payload = jwt_decoder(self.request.headers["Authorization"].split()[1])
        serializer.save(from_team_id=payload["user_id"])
        incResources(serializer.data)
        decResources(serializer.data, payload["user_id"])
        trade_success(payload["user_id"], serializer.data["to_team"])
