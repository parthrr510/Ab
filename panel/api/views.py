# module level imports
from .serializers import (
    ResourceSerializer,
    LeaderBoardSerializer,
    TradeSerializer,
    QuestionGETSerializer,
    SubmissionSerializer,
    NotificationSerializer,
    TeamSerializer,
)
from .permissions import IsOwnerOrReadOnly, FromMSC
from panel.models import Resource, Trade, Question, Submission, Notification
from users.models import MyUser

# other imports
from django.conf import settings
import jwt
from decimal import Decimal
from django.core.mail import send_mail

# from django.utils import timezone

# rest_framework
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView, ListAPIView
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
        from_team = MyUser.objects.get(id=payload["user_id"])
        to_team = MyUser.objects.get(id=serializer.data["to_team"])
        incResources(serializer.data)
        decResources(serializer.data, payload["user_id"])
        trade_success(payload["user_id"], serializer.data["to_team"])
        Notification.objects.create(
            notification=f"Trade between {from_team.country_name} to {to_team.country_name} was completed successfully!"
        )


class Depreciate(APIView):
    permission_classes = [
        FromMSC,
        AllowAny,
    ]

    def get(self, request, *args, **kwargs):
        resources = Resource.objects.all()
        for resource in resources:
            resource.mscBits = (
                resource.mscBits - resource.rate_mscb * Decimal(0.01) * resource.mscBits
            )
            resource.food = (
                resource.food - resource.rate_food * Decimal(0.01) * resource.food
            )
            resource.medicine = (
                resource.medicine
                - resource.rate_medicine * Decimal(0.01) * resource.medicine
            )
            resource.technology = (
                resource.technology
                - resource.rate_technology * Decimal(0.01) * resource.technology
            )
            resource.GDP = (
                resource.mscBits
                + resource.food * (Decimal(0.75))
                + resource.medicine * (Decimal(0.8))
                + resource.technology * (Decimal(2))
            )
            resource.save()

        return Response("Done")


class QuestionView(APIView):
    permission_classes = [
        IsAuthenticated,
    ]

    def get(self, request, *args, **kwargs):
        payload = jwt_decoder(self.request.headers["Authorization"].split()[1])
        questions = Question.objects.all()
        exclude_list = []
        for question in questions:
            if Submission.objects.filter(
                team_id=payload["user_id"], isCorrect=True, question=question.update_no
            ).exists():
                exclude_list.append(question.update_no)
        questions = Question.objects.filter().exclude(update_no__in=exclude_list)
        serializer = QuestionGETSerializer(
            questions, many=True, context={"request": request}
        )
        return Response(serializer.data)


class SubmissionView(APIView):

    permission_classes = [
        IsAuthenticated,
    ]

    def post(self, request, question, *args, **kwargs):
        payload = jwt_decoder(self.request.headers["Authorization"].split()[1])
        data = request.data
        resource = Resource.objects.get(team_id=payload["user_id"])
        questions = Question.objects.get(update_no=question)
        team = MyUser.objects.get(id=payload["user_id"])
        if team.continent == questions.region or questions.region == "Global":
            if Submission.objects.filter(
                team_id=payload["user_id"], isCorrect=True, question=questions.update_no
            ).exists():
                return Response("You have already submitted the correct answer!")
            else:
                if data["submission"] == questions.answer:
                    if Submission.objects.filter(
                        team_id=payload["user_id"], question=questions.update_no
                    ).exists():
                        submission = Submission.objects.get(
                            team_id=payload["user_id"], question=questions.update_no
                        )
                        submission.isCorrect = True
                        resource.rate_mscb = (
                            resource.rate_mscb
                            - questions.rate_mscb
                            - submission.additional_rate_mscBits
                        )
                        resource.rate_food = (
                            resource.rate_food
                            - questions.rate_food
                            - submission.additional_rate_food
                        )
                        resource.rate_technology = (
                            resource.rate_technology
                            - questions.rate_technology
                            - submission.additional_rate_technology
                        )
                        resource.rate_medicine = (
                            resource.rate_medicine
                            - questions.rate_medicine
                            - submission.additional_rate_medicine
                        )
                        # submission.timestamp = timezone.now
                        submission.additional_rate_mscBits = Decimal(0.00)
                        submission.additional_rate_food = Decimal(0.00)
                        submission.additional_rate_medicine = Decimal(0.00)
                        submission.additional_rate_technology = Decimal(0.00)
                        submission.save()
                        resource.save()
                    else:
                        submission = Submission.objects.get(
                            team_id=payload["user_id"], question=questions.update_no
                        )
                        resource.rate_mscb = (
                            resource.rate_mscb
                            - questions.rate_mscb
                            - submission.additional_rate_mscBits
                        )
                        resource.rate_food = (
                            resource.rate_food
                            - questions.rate_food
                            - submission.additional_rate_food
                        )
                        resource.rate_technology = (
                            resource.rate_technology
                            - questions.rate_technology
                            - submission.additional_rate_technology
                        )
                        resource.rate_medicine = (
                            resource.rate_medicine
                            - questions.rate_medicine
                            - submission.additional_rate_medicine
                        )
                        resource.save()
                        serializer = SubmissionSerializer(data=data)
                        if serializer.is_valid():
                            serializer.save(
                                team_id=team, question=questions, isCorrect=True
                            )
                            return Response(serializer.data)

                else:
                    if Submission.objects.filter(
                        team_id=payload["user_id"], question=questions.update_no
                    ).exists():
                        submission = Submission.objects.get(
                            team_id=payload["user_id"], question=questions.update_no
                        )
                        submission.submission = data["submission"]
                        submission.additional_rate_mscBits = (
                            submission.additional_rate_mscBits + Decimal(0.5)
                        )
                        submission.additional_rate_food = (
                            submission.additional_rate_food + Decimal(0.5)
                        )
                        submission.additional_rate_technology = (
                            submission.additional_rate_technology + Decimal(0.5)
                        )
                        submission.additional_rate_medicine = (
                            submission.additional_rate_medicine + Decimal(0.5)
                        )
                        resource.rate_mscb += submission.additional_rate_mscBits
                        resource.rate_food += submission.additional_rate_food
                        resource.rate_medicine += submission.additional_rate_medicine
                        resource.rate_technology += (
                            submission.additional_rate_technology
                        )
                        resource.save()
                        # submission.timestamp = timezone.now
                        submission.save()
                    else:
                        serializer = SubmissionSerializer(data=data)
                        if serializer.is_valid():
                            serializer.save(
                                team_id=team,
                                question=questions,
                                isCorrect=False,
                                additional_rate_mscBits=Decimal(0.5),
                                additional_rate_food=Decimal(0.5),
                                additional_rate_technology=Decimal(0.5),
                                additional_rate_medicine=Decimal(0.5),
                            )
                            submission = Submission.objects.get(
                                team_id=payload["user_id"], question=questions.update_no
                            )
                            resource.rate_mscb += submission.additional_rate_mscBits
                            resource.rate_food += submission.additional_rate_food
                            resource.rate_medicine += (
                                submission.additional_rate_medicine
                            )
                            resource.rate_technology += (
                                submission.additional_rate_technology
                            )
                            resource.save()
                            return Response(serializer.data)


class NotificationView(ListAPIView):
    queryset = Notification.objects.all()
    permission_classes = [
        IsAuthenticated,
    ]
    serializer_class = NotificationSerializer


class TeamListAPIView(ListAPIView):
    queryset = MyUser.objects.all()
    permission_classes = [
        IsAuthenticated,
    ]
    serializer_class = TeamSerializer
