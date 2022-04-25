from django.urls import path

from . import views


urlpatterns = [
    # category
    path('coursecategory/', views.CourseCategoryList.as_view(), name="category"),
    path('courseCategory/<int:pk>/', views.CourseCategoryDetail.as_view()),
    #course
    path('course/', views.CourseList.as_view(), name="course"),
    path('course/<int:pk>/', views.CourseDetail.as_view(), name = "course-detail"),
    # chapter = coursedetail
    path('coursedetails/', views.CourseDetailsList.as_view(), name = "details"),
    # specific Course chapter
    path('coursedetails/<int:course_id>/', views.CourseDetailsList2.as_view()),
    # specific chapter
    path('details/<int:pk>/',  views.CourseDetailsView.as_view()),
    # user courses
    path('user-courses/<int:user_id>/', views.userCourseList.as_view(), name="user-courses"),
    # all course details
    path('user-course-detail/<int:pk>/', views.userCourseDetail.as_view()),
    
    #path('get-wishlists/<int:id>', views.get_wishlists, name='get-wishlists'),
]