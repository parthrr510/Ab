# Generated by Django 3.0.6 on 2020-06-05 06:31

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="MyUser",
            fields=[
                ("password", models.CharField(max_length=128, verbose_name="password")),
                (
                    "last_login",
                    models.DateTimeField(
                        blank=True, null=True, verbose_name="last login"
                    ),
                ),
                (
                    "id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                (
                    "team_name",
                    models.CharField(
                        max_length=300,
                        unique=True,
                        validators=[
                            django.core.validators.RegexValidator(
                                code="invalid_username",
                                message="Username must be alphanumeric or contain numbers",
                                regex="^[a-zA-Z0-9.+-]*$",
                            )
                        ],
                    ),
                ),
                (
                    "email",
                    models.EmailField(
                        max_length=255, unique=True, verbose_name="email address"
                    ),
                ),
                ("team_members", models.IntegerField()),
                ("dateJoined", models.DateTimeField(default=django.utils.timezone.now)),
                ("is_admin", models.BooleanField(default=False)),
                ("is_staff", models.BooleanField(default=False)),
            ],
            options={"abstract": False,},
        ),
        migrations.CreateModel(
            name="Member",
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
                    "mobile",
                    models.CharField(
                        max_length=16,
                        validators=[
                            django.core.validators.RegexValidator(
                                code="invalid_mobile",
                                message="Enter a valid mobile number",
                                regex="^(\\+\\d{1,3}[- ]?)?\\d{10}$",
                            )
                        ],
                    ),
                ),
                (
                    "firstName",
                    models.CharField(max_length=20, verbose_name="First Name"),
                ),
                ("lastName", models.CharField(max_length=20, verbose_name="Last Name")),
                ("college_name", models.CharField(max_length=100)),
                (
                    "year",
                    models.CharField(
                        choices=[
                            ("1", "First"),
                            ("2", "Second"),
                            ("3", "Third"),
                            ("4", "Fourth"),
                        ],
                        max_length=1,
                    ),
                ),
                (
                    "team",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
    ]