from django.db import models
from users.models import MyUser
from django.core.validators import MaxValueValidator, MinValueValidator
from django.utils import timezone


class Resource(models.Model):
    team = models.OneToOneField(MyUser, on_delete=models.CASCADE)
    mscBits = models.DecimalField(
        "MSCBits",
        default=100,
        validators=[MaxValueValidator(500), MinValueValidator(30)],
        max_digits=5,
        decimal_places=2,
    )
    food = models.DecimalField(
        "Food",
        default=150,
        validators=[MaxValueValidator(500), MinValueValidator(45)],
        max_digits=5,
        decimal_places=2,
    )
    technology = models.DecimalField(
        "Technology",
        default=75,
        validators=[MaxValueValidator(100), MinValueValidator(0)],
        max_digits=5,
        decimal_places=2,
    )
    GDP = models.DecimalField("GDP", default=426.5, max_digits=5, decimal_places=2,)
    medicine = models.DecimalField(
        "Medicine",
        default=80,
        validators=[MaxValueValidator(500), MinValueValidator(24)],
        max_digits=5,
        decimal_places=2,
    )

    def __str__(self):
        return f"Resources for team {self.team.team_name}"

    def save(self, **args):
        super().save()

    class Meta:
        ordering = [
            "GDP",
        ]


class Trade(models.Model):
    from_team = models.ForeignKey(
        MyUser, on_delete=models.CASCADE, related_name="from_team"
    )
    to_team = models.ForeignKey(MyUser, on_delete=models.CASCADE, related_name="to")
    mscBits = models.DecimalField(
        "MSCBits",
        max_digits=5,
        decimal_places=2,
        validators=[MaxValueValidator(500), MinValueValidator(0)],
        blank=True,
        null=True,
    )
    food = models.DecimalField(
        "Food",
        max_digits=5,
        decimal_places=2,
        validators=[MaxValueValidator(500), MinValueValidator(0)],
        blank=True,
        null=True,
    )
    technology = models.DecimalField(
        "Technology",
        max_digits=5,
        decimal_places=2,
        validators=[MaxValueValidator(100), MinValueValidator(0)],
        blank=True,
        null=True,
    )
    medicine = models.DecimalField(
        "Medicine",
        max_digits=5,
        decimal_places=2,
        validators=[MaxValueValidator(500), MinValueValidator(0)],
        blank=True,
        null=True,
    )
    timestamp = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"Trade from {self.from_team} to {self.to_team}"
