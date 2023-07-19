from django.contrib.auth import get_user_model
from django.contrib.auth.models import AnonymousUser
from django.test import RequestFactory
import pytest

from core.utils import IsReadOnlyOrUser

User = get_user_model()


@pytest.mark.django_db
def test_is_read_only_or_user_permission():
    factory = RequestFactory()
    permission = IsReadOnlyOrUser()
    user = User.objects.create_user(username="user", password="password")
    staff_user = User.objects.create_user(
        username="staff", password="password", is_staff=True
    )

    request = factory.get("/")
    request.user = AnonymousUser()
    assert permission.has_permission(request, None) is True

    request = factory.get("/")
    request.user = user
    assert permission.has_permission(request, None) is True

    request = factory.get("/")
    request.user = staff_user
    assert permission.has_permission(request, None) is True
