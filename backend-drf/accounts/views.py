

from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from .serializer import UserSerializer
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response


class RegisterViews(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer   # ✅ EXACT NAME

    #here permission is allowed any one can access it
    permission_classes = [AllowAny]

class Protected(APIView):
    # as it is protected view we need to pass permission class
    #  as we pass permission class this view will be access only by authenticated user

    permission_classes=[IsAuthenticated]
    def get(self,request):
        response={
            'status':'request was permitted'
        }

        return Response(response)