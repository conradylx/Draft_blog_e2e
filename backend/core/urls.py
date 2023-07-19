from django.urls import path
from . import views

urlpatterns = [
    path("posts/", views.PostListAPIView.as_view(), name="post-list"),
    path("posts/create", views.PostListCreateAPIView.as_view(), name="post-create"),
    path("posts/<int:pk>/", views.PostDetailAPIView.as_view(), name="post-details"),
    path(
        "posts/<int:pk>/update", views.PostUpdateAPIView.as_view(), name="post-update"
    ),
    path(
        "posts/<int:pk>/delete", views.PostDeleteAPIView.as_view(), name="post-delete"
    ),
]
