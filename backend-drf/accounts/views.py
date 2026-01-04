

from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from .serializer import UserSerializer



class RegisterViews(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer   # ✅ EXACT NAME
    permission_classes = [AllowAny]
