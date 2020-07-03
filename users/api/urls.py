from django.urls import path
from .views import AddMemberAPIView

urlpatterns = [
    path("add-members/", AddMemberAPIView.as_view(), name="add-member"),
]
