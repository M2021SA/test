import datetime

from django.test import TestCase
from django.test.client import Client
from django.urls import reverse



class test_course(TestCase):
    def test_course_list(self):
        client = Client()
        response = client.get(reverse('category'))
        self.assertEquals(response.status_code, 200)


class test_category(TestCase):
    def test_category_list(self):
        client = Client()
        response = client.get(reverse('course'))
        self.assertEquals(response.status_code, 200)


class test_details(TestCase):
    def test_details_list(self):
        client = Client()
        response = client.get(reverse('details'))
        self.assertEquals(response.status_code, 200)


