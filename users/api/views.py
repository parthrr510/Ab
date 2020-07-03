from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from django.conf import settings
import jwt
from users.models import Member, MyUser
from .serialiizers import MemberSerializer


def jwt_decoder(encoded_token):
    return jwt.decode(encoded_token, settings.SECRET_KEY, algorithms=["HS256"])


class AddMemberAPIView(APIView):

    permission_classes = [
        IsAuthenticated,
    ]

    def post(self, request, *args, **kwargs):
        payload = jwt_decoder(self.request.headers["Authorization"].split()[1])
        data = request.data
        team = MyUser.objects.get(id=payload["user_id"])
        members_count = Member.objects.filter(team=team).count()
        if members_count >= team.team_members:
            return Response("You've already added all the members.")
        serializer = MemberSerializer(data=data)
        if serializer.is_valid():
            serializer.save(team=team)
            return Response(serializer.data)
        return Response(serializer.errors)
