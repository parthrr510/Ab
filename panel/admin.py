from django.contrib import admin
from .models import Resource, Trade, Question, Submission

# Register your models here.

admin.site.register(Resource)
admin.site.register(Trade)
admin.site.register(Question)
admin.site.register(Submission)
