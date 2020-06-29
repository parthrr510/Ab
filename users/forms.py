from django.contrib.auth import get_user_model

# from django.db.models import Q

from django import forms
from django.contrib.auth.forms import UserCreationForm

User = get_user_model()


class UserCreationFormForAdmin(forms.ModelForm):
    password1 = forms.CharField(label="Password", widget=forms.PasswordInput)
    password2 = forms.CharField(
        label="Password confirmation", widget=forms.PasswordInput
    )

    class Meta:
        model = User
        fields = ["email"]

    def clean_email(self):
        email = self.cleaned_data.get("email")
        qs = User.objects.filter(email=email)
        if qs.exists():
            raise forms.ValidationError("Email already exists!")
        return email

    def clean_password(self):
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("Passwords do not match")
        return password2

    def save(self, commit=True):
        user = super(UserCreationFormForAdmin, self).save(commit=False)
        user.set_password(self.cleaned_data["password1"])

        if commit:
            user.save()
        return user


class UserRegisterForm(UserCreationForm):
    team_name = forms.CharField(max_length=300, required=True,)
    email = forms.EmailField(
        max_length=255,
        help_text="Required. Details of the event will be sent to this email.",
    )
    team_members = forms.IntegerField(
        help_text="A team cannot have more than 3 members!", max_value=3, min_value=1
    )

    class Meta:
        model = User
        fields = ["team_name", "email", "team_members", "password1", "password2"]
