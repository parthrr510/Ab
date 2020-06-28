from django.contrib import admin
from .models import Resource, Trade, Question, Submission, Notification

# Register your models here.

admin.site.register(Resource)
admin.site.register(Trade)
admin.site.register(Question)
admin.site.register(Submission)
admin.site.register(Notification)
