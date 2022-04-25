from rest_framework import serializers

from .models import CourseCategory, Course, CourseDetails, Wishlist


class CourseCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseCategory
        fields = "__all__"
        

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id', 'category', 'user', 'name', 'brief', 'image', 'course_chapters']
        depth = 1
        
    def __init__(self, *args, **kwargs):
        super(CourseSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        if request and request.method=='POST':
            self.Meta.depth = 0
        else:
            self.Meta.depth = 1
           

class CourseDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseDetails
        fields = "__all__"
                      
class WishListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wishlist
        fields = "__all__"
                      
        