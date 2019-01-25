from rest_framework import generics, permissions
from .serializers import UserSerializer
from oauth2_provider.contrib.rest_framework import TokenHasReadWriteScope
from django.contrib.auth.models import User


class UserList(generics.ListCreateAPIView):
  permission_classes = [permissions.IsAuthenticated, TokenHasReadWriteScope]
  queryset = User.objects.all()
  serializer_class = UserSerializer


class UserDetails(generics.RetrieveAPIView):
  permission_classes = [permissions.IsAuthenticated, TokenHasReadWriteScope]
  queryset = User.objects.all()
  serializer_class = UserSerializer
