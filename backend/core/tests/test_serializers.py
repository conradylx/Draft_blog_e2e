import pytest
from core.models import Post
from core.serializers import PostSerializer


@pytest.mark.django_db
def test_post_serializer_create():
    data = {"title": "Test Post", "content": "Lorem ipsum dolor sit amet"}
    serializer = PostSerializer(data=data)
    assert serializer.is_valid()
    post = serializer.save()
    assert post.title == "Test Post"
    assert post.content == "Lorem ipsum dolor sit amet"


@pytest.mark.django_db
def test_post_serializer_update():
    post = Post.objects.create(title="Test Post", content="Lorem ipsum dolor sit amet")
    data = {"title": "Updated Post", "content": "New content"}
    serializer = PostSerializer(instance=post, data=data)
    assert serializer.is_valid()
    updated_post = serializer.save()
    assert updated_post.title == "Updated Post"
    assert updated_post.content == "New content"
