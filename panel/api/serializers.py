# module level imports
from panel.models import Resource, Trade, Question

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
            "region",
            "update",
            "image",
            "question",
            "pdf",
        ]
