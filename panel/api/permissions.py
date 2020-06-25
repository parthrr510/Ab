from rest_framework.permissions import BasePermission
import jwt
from django.conf import settings


def jwt_decoder(encoded_token):
    return jwt.decode(encoded_token, settings.SECRET_KEY, algorithms=["HS256"])


class IsOwnerOrReadOnly(BasePermission):
    message = "You must be the owner of this object to update it !!"

    def has_object_permission(self, request, view, obj):
        payload = jwt_decoder(request.headers["Authorization"].split()[1])
        user_id = payload["user_id"]
        return str(obj.team_id) == user_id


class FromMSC(BasePermission):
    message = "Only MSC team members can access this route"

    def has_permission(self, request, view):
        if "Else" in request.headers:
            code = request.headers["Else"]
        else:
            return False
        if code == "The-night-is-young-and-we-are-alone-JAI-VPN":
            return True
        return False
