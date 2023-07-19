from django.urls import path
from . import views

urlpatterns = [
    path("register/", views.RegisterView.as_view(), name="register"),
    path("posts/", views.PostListAPIView.as_view(), name="post-list"),
    path("posts/create", views.PostCreateAPIView.as_view(), name="post-create"),
    path("posts/<int:pk>/", views.PostDetailAPIView.as_view(), name="post-details"),
    path(
        "posts/<int:pk>/update", views.PostUpdateAPIView.as_view(), name="post-update"
    ),
    path(
        "posts/<int:pk>/delete", views.PostDeleteAPIView.as_view(), name="post-delete"
    ),
]
