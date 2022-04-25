from django.test import TestCase

from courses.models import CourseCategory, Course, CourseDetails
from users.models import User


class CourseCategory_Test_Case(TestCase):
    def setUp(self):
        print('setUp activity')
        CourseCategory.objects.create(title='backend', description='contain backend courses')
        
    def test_courseCategoey_info(self):
        queryset = CourseCategory.objects.all()
        self.assertEquals(queryset.count(), 1)
        course1 = CourseCategory.objects.get(title='backend')
        self.assertEquals(course1.get_title(), 'backend')
        
     
class Course_Test_Case(TestCase):
    def setUp(self):
          print('setUp activity')
          
          category = CourseCategory.objects.create(title='backend')
          user = User.objects.create(email='test@gmail.com')
          Course.objects.create( category=category, user=user, name='Html', brief='learn html', image='image')
        
    def test_course_info(self):
          queryset = Course.objects.all()
          self.assertEquals(queryset.count(), 1)
          course1 = Course.objects.get(name='Html')
          self.assertEquals(course1.get_name(), 'Html')

class CourseDetails_Test_Case(TestCase):
    def setUp(self):

        course = Course.objects.create(name='django')
        CourseDetails.objects.create( course=course, title='django', description='learn html', video='anyone ', remarks='text')
    
    def test_course_info(self):
        queryset = CourseDetails.objects.all()
        self.assertEquals(queryset.count(), 1)
        course1 = CourseDetails.objects.get(title='django')
        self.assertEquals(course1.get_title(), 'django')




     


    



