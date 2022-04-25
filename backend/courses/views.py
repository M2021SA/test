from django.shortcuts import render ,get_object_or_404 , HttpResponseRedirect

from django.http import  JsonResponse

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import authentication_classes, permission_classes

from .serializers import CourseCategorySerializer ,CourseSerializer , CourseDetailsSerializer
from .models import CourseCategory, Course, CourseDetails , Wishlist
from users.models import User


class CourseCategoryList(generics.ListCreateAPIView):
    queryset = CourseCategory.objects.all()
    serializer_class = CourseCategorySerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]


class CourseCategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = CourseCategory.objects.all()
    serializer_class = CourseCategorySerializer 
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]

class CourseList(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    
    def get_queryset(self):
        qs = super().get_queryset()
        if 'result' in self.request.GET:
            limit=str(self.request.GET['result'])
            qs=Course.objects.filter(name__icontains=limit)
        if 'category' in self.request.GET:
            cat=str(self.request.GET['category'])
            qs=Course.objects.filter(category__title__icontains=cat)
        return qs


class userCourseList(generics.ListCreateAPIView):
    serializer_class = CourseSerializer
    
    def get_queryset(self):
        user_id = self.kwargs['user_id']
        user = User.objects.get(pk=user_id)
        return Course.objects.filter(user=user)

class userCourseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]
    

class CourseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer 


# For course Detail 

class CourseDetailsList(generics.ListCreateAPIView):
    queryset = CourseDetails.objects.all()
    serializer_class = CourseDetailsSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]

class CourseDetailsList2(generics.ListAPIView):
    serializer_class = CourseDetailsSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]

    def get_queryset(self):
        course_id = self.kwargs['course_id']
        course = Course.objects.get(pk=course_id)
        return CourseDetails.objects.filter(course=course)

class CourseDetailsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = CourseDetails.objects.all()
    serializer_class = CourseDetailsSerializer 
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]
    
class CourseDetailsView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CourseDetails.objects.all()
    serializer_class = CourseDetailsSerializer 
   



