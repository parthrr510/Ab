from django.contrib import admin
from .models import Resource, Trade, Question, Submission, Notification
from import_export.admin import ImportExportModelAdmin
from import_export import resources

# Register your models here.


class Resourcere(resources.ModelResource):
    class Meta:
        model = Resource


class QuestionResource(resources.ModelResource):
    class Meta:
        model = Question


class SubmissionResource(resources.ModelResource):
    class Meta:
        model = Submission


class NotificationResource(resources.ModelResource):
    class Meta:
        model = Notification


class TradeResource(resources.ModelResource):
    class Meta:
        model = Trade


class ResourceAdmin(ImportExportModelAdmin):
    resource_class = Resourcere


class QuestionAdmin(ImportExportModelAdmin):
    resource_class = Question


class SubmissionAdmin(ImportExportModelAdmin):
    resource_class = Submission


class NotificationAdmin(ImportExportModelAdmin):
    resource_class = Notification


class TradeAdmin(ImportExportModelAdmin):
    resource_class = Trade


admin.site.register(Resource, ResourceAdmin)
admin.site.register(Trade, TradeAdmin)
admin.site.register(Question, QuestionAdmin)
admin.site.register(Submission, SubmissionAdmin)
admin.site.register(Notification, NotificationAdmin)
