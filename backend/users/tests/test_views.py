import datetime

from django.test import TestCase
from django.test.client import Client
from django.urls import reverse



class test_views(TestCase):
    def test_user_list(self):
        client = Client()
        response = client.get(reverse('user'))
        self.assertEquals(response.status_code, 200)
    

class test_views(TestCase):
    def test_user_login_list(self):
        client = Client()
        response = client.get(reverse('user-login'))
        self.assertEquals(response.status_code, 200)