from rest_framework import permissions


class IsReadOnlyOrUser(permissions.BasePermission):
    def has_permission(self, request, view):
        if not request.user.is_authenticated:
            return request.method in permissions.SAFE_METHODS

        return (
            request.method in permissions.SAFE_METHODS or not request.user.is_superuser
        )
