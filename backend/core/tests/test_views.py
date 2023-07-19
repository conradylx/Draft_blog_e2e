from django.urls import reverse
import pytest
from rest_framework import status
from rest_framework.test import APIClient

from core.models import Post
from django.contrib.auth import get_user_model

User = get_user_model()


@pytest.fixture
def admin_user():
    return User.objects.create_user(username="admin", password="admin", is_staff=True)


@pytest.fixture
def regular_user():
    return User.objects.create_user(username="user", password="user", is_staff=False)


@pytest.mark.django_db
def test_post_list_view(admin_user, regular_user):
    admin_client = APIClient()
    regular_client = APIClient()

    url = reverse("post-list")

    admin_client.force_authenticate(user=admin_user)
    response = admin_client.get(url)
    assert response.status_code == status.HTTP_200_OK

    regular_client.force_authenticate(user=regular_user)
    response = regular_client.get(url)
    assert response.status_code == status.HTTP_200_OK


@pytest.mark.django_db
def test_post_create_view(admin_user, regular_user):
    admin_client = APIClient()
    regular_client = APIClient()

    data = {"title": "Test Post", "content": "Lorem ipsum dolor sit amet"}
    url = reverse("post-create")

    admin_client.force_authenticate(user=admin_user)
    response = admin_client.post(url, data, format="json")
    assert response.status_code == status.HTTP_201_CREATED

    regular_client.force_authenticate(user=regular_user)
    response = regular_client.post(url, data, format="json")
    assert response.status_code == status.HTTP_403_FORBIDDEN


@pytest.mark.django_db
def test_post_retrieve_view(admin_user, regular_user):
    post = Post.objects.create(title="Test Post", content="Lorem ipsum dolor sit amet")
    admin_client = APIClient()
    regular_client = APIClient()

    url = reverse("post-details", kwargs={"pk": post.pk})

    admin_client.force_authenticate(user=admin_user)
    response = admin_client.get(url)
    assert response.status_code == status.HTTP_200_OK

    regular_client.force_authenticate(user=regular_user)
    response = regular_client.get(url)
    assert response.status_code == status.HTTP_200_OK


@pytest.mark.django_db
def test_post_update_view(admin_user, regular_user):
    post = Post.objects.create(title="Test Post", content="Lorem ipsum dolor sit amet")
    admin_client = APIClient()
    regular_client = APIClient()

    url = reverse("post-update", kwargs={"pk": post.pk})
    data = {"title": "Updated Post", "content": "New content"}

    admin_client.force_authenticate(user=admin_user)
    response = admin_client.put(url, data, format="json")
    assert response.status_code == status.HTTP_200_OK
    assert response.data["title"] == "Updated Post"
    assert response.data["content"] == "New content"

    regular_client.force_authenticate(user=regular_user)
    response = regular_client.put(url, data, format="json")
    assert response.status_code == status.HTTP_403_FORBIDDEN


@pytest.mark.django_db
def test_post_delete_view(admin_user, regular_user):
    post = Post.objects.create(title="Test Post", content="Lorem ipsum dolor sit amet")
    client = APIClient()

    client.force_authenticate(user=regular_user)
    url = reverse("post-delete", kwargs={"pk": post.pk})
    response = client.delete(url)
    assert response.status_code == status.HTTP_403_FORBIDDEN
    assert Post.objects.filter(pk=post.pk).exists()
    client.force_authenticate(user=admin_user)
    response = client.delete(url)
    assert response.status_code == status.HTTP_204_NO_CONTENT
    assert not Post.objects.filter(pk=post.pk).exists()
