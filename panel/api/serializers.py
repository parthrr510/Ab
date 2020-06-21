# module level imports
from panel.models import Resource

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
