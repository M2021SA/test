from django.contrib.auth.models import AbstractUser

from django.db import models


class User(AbstractUser):
    username = models.CharField(max_length=50, null=True , blank= True)
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    
    
    
    def __str__(self):
        return self.email
    
    def get_name(self):
        return self.username
        
    