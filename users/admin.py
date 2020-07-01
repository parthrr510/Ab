from django.contrib import admin

from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from import_export.admin import ImportExportMixin, ImportExportModelAdmin
from import_export import resources

from .forms import UserCreationFormForAdmin
from .models import MyUser, Member

# Register your models here.


class UserResource(resources.ModelResource):
    class Meta:
        model = MyUser


class MemberResource(resources.ModelResource):
    class Meta:
        model = Member


class MemberInline(admin.TabularInline):
    model = Member


class UserAdmin(
    ImportExportMixin, BaseUserAdmin, admin.ModelAdmin,
):
    resource_class = UserResource

    add_form = UserCreationFormForAdmin

    list_display = ("team_name", "email", "is_admin")
    list_filter = ("is_admin",)

    fieldsets = (
        (None, {"fields": ("team_name", "email", "password",)},),
        (
            "Details",
            {
                "fields": (
                    "team_members",
                    "dateJoined",
                    "email_confirmed",
                    "country_name",
                    "continent",
                    "flag",
                )
            },
        ),
        ("Permissions", {"fields": ("is_admin", "is_active",)}),
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


class MemberAdmin(ImportExportModelAdmin):
    resource_class = MemberResource


admin.site.register(MyUser, UserAdmin)
admin.site.register(Member, MemberAdmin)


admin.site.unregister(Group)
