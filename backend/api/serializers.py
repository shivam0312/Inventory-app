from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product


class UserManagerSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'],
             validated_data['password'])
        return user

    class Meta:
        model = User
        fields = ('id','username','email','password','is_staff')
        write_only_fields = ('password',)


class ProductAssitantSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = "__all__"
        read_only_fields = ('is_approved',)

class ProductManagerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = "__all__"

