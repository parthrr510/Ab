# Generated by Django 3.0.6 on 2020-06-18 10:59

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Resources",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "mscBits",
                    models.DecimalField(
                        decimal_places=2,
                        default=100,
                        max_digits=5,
                        validators=[
                            django.core.validators.MaxValueValidator(500),
                            django.core.validators.MinValueValidator(30),
                        ],
                        verbose_name="MSCBits",
                    ),
                ),
                (
                    "food",
                    models.DecimalField(
                        decimal_places=2,
                        default=150,
                        max_digits=5,
                        validators=[
                            django.core.validators.MaxValueValidator(500),
                            django.core.validators.MinValueValidator(45),
                        ],
                        verbose_name="Food",
                    ),
                ),
                (
                    "technology",
                    models.DecimalField(
                        decimal_places=2,
                        default=75,
                        max_digits=5,
                        validators=[
                            django.core.validators.MaxValueValidator(100),
                            django.core.validators.MinValueValidator(0),
                        ],
                        verbose_name="Technology",
                    ),
                ),
                (
                    "GDP",
                    models.DecimalField(
                        decimal_places=2,
                        default=426.5,
                        max_digits=5,
                        verbose_name="GDP",
                    ),
                ),
                (
                    "medicine",
                    models.DecimalField(
                        decimal_places=2,
                        default=80,
                        max_digits=5,
                        validators=[
                            django.core.validators.MaxValueValidator(500),
                            django.core.validators.MinValueValidator(24),
                        ],
                        verbose_name="Medicine",
                    ),
                ),
                (
                    "team",
                    models.OneToOneField(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
    ]