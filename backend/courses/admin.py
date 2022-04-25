from django.contrib import admin

from .models import CourseCategory, Course, CourseDetails ,Wishlist


admin.site.site_header = 'Go Courses Administration'


class CourseAdmin(admin.ModelAdmin):
    list_display = [ 'category', 'name', 'brief']
    list_display_links = [ 'name' ]
    search_fields = [ 'name' ]

admin.site.register(Course, CourseAdmin)


class CourseDetailsAdmin(admin.ModelAdmin):
    list_display = [  'course', 'title', 'description', 'video', 'remarks']
    list_display_links = [ 'title' ]
    search_fields = [ 'title' ] 

admin.site.register(CourseDetails, CourseDetailsAdmin)

  
class CourseCategoryAdmin(admin.ModelAdmin):
    list_display = [ 'title', 'description']
    list_display_links = [ 'title' ] 
   
    
admin.site.register( CourseCategory, CourseCategoryAdmin)

#admin.site.register( Wishlist)

