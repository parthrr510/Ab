# module level imports
from panel.models import Resource, Trade, Question, Submission, Notification
from users.models import MyUser

# rest_framework
from rest_framework.serializers import ModelSerializer, CharField, SerializerMethodField


class ResourceSerializer(ModelSerializer):
    class Meta:
        model = Resource
        fields = [
            "team",
            "mscBits",
            "food",
            "technology",
            "medicine",
        ]


class LeaderBoardSerializer(ModelSerializer):
    country = CharField(source="team.country_name", read_only=True)
    continent = CharField(source="team.continent", read_only=True)
    flag = SerializerMethodField("image_url")

    def image_url(self, obj):
        request = self.context.get("request")
        return request.build_absolute_uri(obj.team.flag.url)

    class Meta:
        model = Resource
        fields = [
            "country",
            "continent",
            "flag",
            "GDP",
        ]


class TradeSerializer(ModelSerializer):
    class Meta:
        model = Trade
        fields = [
            "to_team",
            "mscBits",
            "food",
            "technology",
            "medicine",
        ]


class QuestionGETSerializer(ModelSerializer):
    class Meta:
        model = Question
        fields = [
            "update_no",
            "region",
            "update",
            "image",
            "question",
            "pdf",
        ]


class SubmissionSerializer(ModelSerializer):
    class Meta:
        model = Submission
        fields = [
            "submission",
        ]


class NotificationSerializer(ModelSerializer):
    class Meta:
        model = Notification
        fields = [
            "notification",
        ]


class TeamSerializer(ModelSerializer):
    class Meta:
        model = MyUser
        fields = [
            "id",
            "team_name",
            "country_name",
            "continent",
        ]
