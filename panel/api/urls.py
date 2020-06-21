from django.urls import path
from . import views

urlpatterns = [
    path("resources/", views.ResourceView.as_view(), name="resources"),
    path("leaderboard/", views.LeaderBoard.as_view(), name="leaderboard"),
]