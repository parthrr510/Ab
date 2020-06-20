# module level imports
from panel.models import Resource

# rest_framework
from rest_framework.serializers import ModelSerializer


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
