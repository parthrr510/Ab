from rest_framework.serializers import ModelSerializer
from users.models import Member


class MemberSerializer(ModelSerializer):
    class Meta:
        model = Member
        fields = [
            "mobile",
            "firstName",
            "lastName",
            "college_name",
            "year",
        ]
