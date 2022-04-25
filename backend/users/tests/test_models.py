from django.test import TestCase

from users.models import User


class user_Test_Case(TestCase):
    def setUp(self):

        User.objects.create( username='munira', email='test@gmail.com', password='11111' , first_name='munira')
    
    def test_user_info(self):
        queryset = User.objects.all()
        self.assertEquals(queryset.count(), 1)
        user1 = User.objects.get(username='munira')
        self.assertEquals(user1.get_name(), 'munira')