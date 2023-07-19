from drf_yasg.utils import swagger_auto_schema
from rest_framework import generics, permissions
from .models import Post
from .serializers import PostSerializer, UserSerializer
from django.contrib.auth import get_user_model

User = get_user_model()


class RegisterView(generics.CreateAPIView):
    model = get_user_model()
    permission_classes = [permissions.AllowAny]
    serializer_class = UserSerializer

    @swagger_auto_schema(
        operation_description="Create new user",
        request_body=UserSerializer(),
        responses={201: UserSerializer()},
    )
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class PostListAPIView(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticated]

    @swagger_auto_schema(
        operation_description="List all posts",
        responses={200: PostSerializer(many=True)},
    )
    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


class PostDetailAPIView(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticated]

    @swagger_auto_schema(
        operation_description="Retrieve a post by ID", responses={200: PostSerializer()}
    )
    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)


class PostCreateAPIView(generics.CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAdminUser]

    @swagger_auto_schema(
        operation_description="Create a new post",
        request_body=PostSerializer(),
        responses={201: PostSerializer()},
    )
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class PostUpdateAPIView(generics.UpdateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAdminUser]

    @swagger_auto_schema(
        operation_description="Update a post by ID",
        request_body=PostSerializer(),
        responses={200: PostSerializer()},
    )
    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)


class PostDeleteAPIView(generics.DestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAdminUser]

    @swagger_auto_schema(
        operation_description="Delete a post by ID", responses={204: "No Content"}
    )
    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)
