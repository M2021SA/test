from django.db import models
from django.conf import settings


class CourseCategory(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField()
    
    def __str__(self):
        return self.title 

    def get_title(self):
        return self.title
    class Meta:
        verbose_name = 'Course Categorie'


class Course(models.Model):
    category = models.ForeignKey(CourseCategory, on_delete=models.CASCADE, null=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=100, null=False, blank=False)
    brief = models.TextField(null=False, blank=False)
    image = models.ImageField(upload_to='img/%y/m/%d', default='img/1.png')
    
    def __str__(self):       
        return self.name 

    def get_name(self):
        return self.name
    
 
class CourseDetails(models.Model):
    course = models.ForeignKey(Course ,null=True,  on_delete=models.CASCADE,related_name='course_chapters')
    title = models.CharField(max_length=200, null=False, blank=False )
    description = models.TextField(null=False, blank=False )
    video = models.URLField( null=False, blank=False )
    remarks = models.CharField(max_length=200, blank=True)
    
    class Meta:
        verbose_name = 'Course Chapter'
    
    def __str__(self):
        return self.title

    def get_title(self):
        return self.title

class Wishlist(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
    wished_course = models.ForeignKey(Course,on_delete=models.CASCADE)
    

