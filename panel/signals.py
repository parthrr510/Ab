from django.db.models.signals import post_save
from django.conf import settings
from django.dispatch import receiver
from .models import Resource


User = settings.AUTH_USER_MODEL


@receiver(post_save, sender=User)
def create_resource(sender, instance, created, **kwargs):
    if created:
        print("here")
        Resource.objects.create(team=instance)


@receiver(post_save, sender=User)
def save_resource(sender, instance, **kwargs):
    instance.resource.save()
