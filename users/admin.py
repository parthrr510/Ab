from django.contrib import admin

from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from .forms import UserCreationForm
from .models import MyUser, Member

# Register your models here.


class MemberInline(admin.TabularInline):
    model = Member


class UserAdmin(BaseUserAdmin, admin.ModelAdmin):
    add_form = UserCreationForm

    list_display = ("team_name", "email", "is_admin")
    list_filter = ("is_admin",)

    fieldsets = (
        (None, {"fields": ("team_name", "email", "password",)},),
        ("Details", {"fields": ("team_members", "dateJoined",)}),
        ("Permissions", {"fields": ("is_admin",)}),
    )
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": (
                    "team_name",
                    "email",
                    "team_members",
                    "password1",
                    "password2",
                ),
            },
        ),
    )
    search_fields = ("team_name", "email")
    ordering = ("team_name", "email")

    filter_horizontal = ()

    inlines = [
        MemberInline,
    ]


admin.site.register(MyUser, UserAdmin)
admin.site.register(Member)


admin.site.unregister(Group)
