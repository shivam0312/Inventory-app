from django.shortcuts import render
from .models import Product
from django.contrib.auth.models import User
from .serializers import UserManagerSerializer, ProductAssitantSerializer, ProductManagerSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated,IsAdminUser,IsAuthenticatedOrReadOnly
from rest_framework.authentication import TokenAuthentication


# Create your views here.
class UserViewSet(viewsets.ModelViewSet):

    queryset = User.objects.all()
    serializer_class = UserManagerSerializer
    authentication_classes =(TokenAuthentication,)
    #permission_classes = (IsAuthenticated,IsAdminUser)

class ProductViewSet(viewsets.ModelViewSet):

    queryset = Product.objects.all()
    #permission_classes = (IsAuthenticated,)

    def get_serializer_class(self):
        if self.request.user.is_staff:
            return ProductManagerSerializer
        return ProductAssitantSerializer


