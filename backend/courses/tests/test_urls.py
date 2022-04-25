from django.test import SimpleTestCase
from django.urls import reverse, resolve

from courses.views import CourseList, CourseCategoryList, CourseDetailsList


class coursesUrlsTest(SimpleTestCase):

    def test_get_course_isresolved(self): 
        url = reverse('course')  
        self.assertEquals(resolve(url).func.view_class,CourseList)

    def test_get_courseCategory_isresolved(self): 
        url = reverse('category')  
        print(url)
        self.assertEquals(resolve(url).func.view_class,CourseCategoryList)

    def test_get_courseDetailsList_isresolved(self): 
        url = reverse('details')  
        print(url)
        self.assertEquals(resolve(url).func.view_class,CourseDetailsList)