from django.db import models

# Create your models here.
from django.core.validators import RegexValidator
from django.utils import timezone
import uuid

from django.contrib.auth.models import BaseUserManager, AbstractBaseUser

USERNAME_REGEX = "^[a-zA-Z0-9.+-]*$"
MOBILE_REGEX = "^(\+\d{1,3}[- ]?)?\d{10}$"  # noqa


class MyUserManager(BaseUserManager):
    def create_user(self, team_name, email, team_members, password=None):
        if not email:
            raise ValueError("Teams must have an email address")

        user = self.model(
            team_name=team_name,
            email=self.normalize_email(email),
            team_members=team_members,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, team_name, email, team_members, password=None):
        user = self.create_user(team_name, email, team_members, password=password)
        user.is_admin = True
        user.is_staff = True
        user.save(using=self._db)
        return user


class MyUser(AbstractBaseUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    team_name = models.CharField(
        max_length=300,
        validators=[
            RegexValidator(
                regex=USERNAME_REGEX,
                message="Username must be alphanumeric or contain numbers",
                code="invalid_username",
            )
        ],
        unique=True,
    )
    email = models.EmailField(max_length=255, unique=True, verbose_name="email address")
    team_members = models.IntegerField()
    dateJoined = models.DateTimeField(default=timezone.now)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    objects = MyUserManager()

    USERNAME_FIELD = "team_name"
    REQUIRED_FIELDS = ["email", "team_members"]

    def __str__(self):
        return self.team_name

    def get_short_name(self):
        # The user is identified by their email address
        return self.team_name

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True


class Member(models.Model):
    YEAR_CHOICES = (
        ("1", "First"),
        ("2", "Second"),
        ("3", "Third"),
        ("4", "Fourth"),
    )

    team = models.ForeignKey(MyUser, on_delete=models.CASCADE)
    mobile = models.CharField(
        max_length=16,
        validators=[
            RegexValidator(
                regex=MOBILE_REGEX,
                message="Enter a valid mobile number",
                code="invalid_mobile",
            )
        ],
    )
    firstName = models.CharField("First Name", max_length=20)
    lastName = models.CharField("Last Name", max_length=20)
    college_name = models.CharField(max_length=100)
    year = models.CharField(max_length=1, choices=YEAR_CHOICES)

    def __str__(self):
        return self.firstName
