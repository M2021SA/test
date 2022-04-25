from rest_framework import serializers
from .models import User 
from django.contrib.auth.hashers import make_password
from django.db import transaction
from rest_framework.authtoken.models import Token

# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = "__all__"


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        #extra_kwargs = {'password': {'write_only': True, 'required': True}}
    # def create(self, validated_data):
    #     password = validated_data.pop('password')
    #     user = super().create(validated_data)
    #     user.set_password(password)
    #     user.save()
    #     return user
    # @transaction.atomic
    # def create(self, validated_data):
    #     user = User.objects.create_user(**validated_data)
    #     return user 
    # def create(self, validated_data):
    #     password = validated_data.pop('password', None) 
    #     instance = self.Meta.model(**validated_data)
    #     if password is not None:
    #         instance.set_password(password)
    #     instance.save()
    #     return instance
    #     user = User.objects.create_user(**validated_data)
    #     Token.objects.create(user=user)
    #     return user
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user

# class UserProfileSerializer(serializers.ModelSerializer):
#     user = UserSerializer(required=True)

#     class Meta:
#         model = User

class ChangePasswordSerializer(serializers.Serializer):
    model = User

    """
    Serializer for password change endpoint.
    """
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)