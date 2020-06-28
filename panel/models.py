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
    rate_mscb = models.DecimalField(
        "rate_mscb", default=0.14, max_digits=4, decimal_places=2
    )
    rate_medicine = models.DecimalField(
        "rate_medicine", default=0.08, max_digits=4, decimal_places=2
    )
    rate_food = models.DecimalField(
        "rate_food", default=0.17, max_digits=4, decimal_places=2
    )
    rate_technology = models.DecimalField(
        "rate_technology", default=0.00, max_digits=4, decimal_places=2
    )

    def __str__(self):
        return f"Resources for team {self.team.team_name}"

    def save(self, **args):
        super().save()

    class Meta:
        ordering = [
            "-GDP",
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


class Question(models.Model):
    region_choices = (
        ("Asia", "Asia"),
        ("Europe", "Europe"),
        ("America", "America"),
        ("Global", "Global"),
    )
    update_no = models.IntegerField(primary_key=True)
    region = models.CharField(max_length=10, choices=region_choices)
    update = models.TextField()
    image = models.ImageField(upload_to="question/", blank=True, null=True)
    question = models.TextField()
    pdf = models.FileField(upload_to="files", blank=True, null=True)
    answer = models.CharField(max_length=40)
    rate_mscb = models.DecimalField(max_digits=5, decimal_places=2, default=0.00)
    rate_food = models.DecimalField(max_digits=5, decimal_places=2, default=0.00)
    rate_technology = models.DecimalField(max_digits=5, decimal_places=2, default=0.00)
    rate_medicine = models.DecimalField(max_digits=5, decimal_places=2, default=0.00)

    def __str__(self):
        return f"Question for {self.update_no}"


class Submission(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    team_id = models.ForeignKey(MyUser, on_delete=models.CASCADE)
    submission = models.CharField(max_length=40, null=False)
    timestamp = models.DateTimeField(default=timezone.now)
    isCorrect = models.BooleanField(default=False)
    additional_rate_mscBits = models.DecimalField(
        max_digits=5, decimal_places=2, default=0.00
    )
    additional_rate_food = models.DecimalField(
        max_digits=5, decimal_places=2, default=0.00
    )
    additional_rate_technology = models.DecimalField(
        max_digits=5, decimal_places=2, default=0.00
    )
    additional_rate_medicine = models.DecimalField(
        max_digits=5, decimal_places=2, default=0.00
    )

    def __str__(self):
        return f"Submission for {self.question} by {self.team_id}"


class Notification(models.Model):
    notifications = models.CharField(max_length=100)

    def __str__(self):
        return f"Notification {self.id}"
