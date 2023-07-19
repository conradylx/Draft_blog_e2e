import pytest

from core.models import Post


@pytest.mark.django_db
def test_model_creation():
    Post.objects.create(title="Test", content="Example")
    assert Post.objects.count() == 1
