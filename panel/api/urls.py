from django.urls import path
from . import views

urlpatterns = [
    path("resources/", views.ResourceView.as_view(), name="resources"),
    path("leaderboard/", views.LeaderBoard.as_view(), name="leaderboard"),
    path("trade/", views.Trade.as_view(), name="trade"),
    path(
        "depriciate/msc/69/420/69/gormint-aunty/the-night-we-met/",
        views.Depreciate.as_view(),
        name="depriciate",
    ),
    path("questions/", views.QuestionView.as_view(), name="question"),
    path(
        "questions/submit/<int:question>/",
        views.SubmissionView.as_view(),
        name="submit",
    ),
    path("notifications/", views.NotificationView.as_view(), name="notifications"),
    path("teams/", views.TeamListAPIView.as_view(), name="teams"),
]
