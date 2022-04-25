from django.urls import path
from . import views #UserList, UserDetail , 
from rest_framework.authtoken.views import obtain_auth_token


urlpatterns = [
    path('user/', views.UserList.as_view() , name="user"),
    path('user/<int:pk>/', views.UserDetail.as_view() , name="user-detail"),
    #path('user-login', views.user_login , name="user-login"),
    path('user-login', views.CustomAuthToken.as_view() , name="user-login"),
    path('auth/', obtain_auth_token , name="create-token"),
     path('change-password/', views.ChangePasswordView.as_view(), name='change-password'),


]