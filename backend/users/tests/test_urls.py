from django.test import SimpleTestCase
from django.urls import reverse, resolve

from users.views import UserList


class userUrlsTest(SimpleTestCase):

    def test_get_user_isresolved(self): 
        url = reverse('user')  
        self.assertEquals(resolve(url).func.view_class,UserList)