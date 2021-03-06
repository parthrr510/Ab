# Generated by Django 3.0.6 on 2020-06-18 13:23

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("panel", "0002_auto_20200618_1641"),
    ]

    operations = [
        migrations.CreateModel(
            name="Trade",
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
                        blank=True,
                        decimal_places=2,
                        max_digits=5,
                        null=True,
                        validators=[
                            django.core.validators.MaxValueValidator(500),
                            django.core.validators.MinValueValidator(0),
                        ],
                        verbose_name="MSCBits",
                    ),
                ),
                (
                    "food",
                    models.DecimalField(
                        blank=True,
                        decimal_places=2,
                        max_digits=5,
                        null=True,
                        validators=[
                            django.core.validators.MaxValueValidator(500),
                            django.core.validators.MinValueValidator(0),
                        ],
                        verbose_name="Food",
                    ),
                ),
                (
                    "technology",
                    models.DecimalField(
                        blank=True,
                        decimal_places=2,
                        max_digits=5,
                        null=True,
                        validators=[
                            django.core.validators.MaxValueValidator(100),
                            django.core.validators.MinValueValidator(0),
                        ],
                        verbose_name="Technology",
                    ),
                ),
                (
                    "medicine",
                    models.DecimalField(
                        blank=True,
                        decimal_places=2,
                        max_digits=5,
                        null=True,
                        validators=[
                            django.core.validators.MaxValueValidator(500),
                            django.core.validators.MinValueValidator(0),
                        ],
                        verbose_name="Medicine",
                    ),
                ),
                ("timestamp", models.DateTimeField(default=django.utils.timezone.now)),
                (
                    "from_team",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="from_team",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
                (
                    "to_team",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="to",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
    ]
