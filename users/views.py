from django.contrib.sites.shortcuts import get_current_site
from django.shortcuts import render, redirect
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.template.loader import render_to_string
from django.core.mail import send_mail
from django.conf import settings
from django.utils.encoding import force_text
from django.contrib.auth import get_user_model
from .forms import UserRegisterForm
from .tokens import account_activation_token

# Create your views here.
User = get_user_model()


def register(request):
    if request.method == "POST":
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.active = False
            user.save()
            current_site = get_current_site(request)
            subject = "Activate Your Abhyudaya Account"
            message = render_to_string(
                "users/account_activation_email.html",
                {
                    "user": user,
                    "domain": current_site.domain,
                    "uid": urlsafe_base64_encode(force_bytes(user.pk)),
                    "token": account_activation_token.make_token(user),
                },
            )
            email_from = settings.EMAIL_HOST_USER
            recipient_list = [
                user.email,
            ]
            send_mail(subject, message, email_from, recipient_list)
            return redirect("account_activation_sent")
    else:
        form = UserRegisterForm()
    return render(request, "users/register.html", {"form": form})


def account_activation_sent(request):
    return render(request, "users/account_activation_sent.html")


def activate(request, uidb64, token):
    try:
        uid = force_text(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except (TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None

    if user is not None and account_activation_token.check_token(user, token):
        user.is_active = True
        user.email_confirmed = True
        user.save()
        return redirect("register")
    else:
        return render(request, "users/account_activation_invalid.html")
