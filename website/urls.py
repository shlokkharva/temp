from django.urls import path
from . import views

app_name = 'website'

urlpatterns = [
    path('', views.home, name='home'),
    path('services/', views.services, name='services'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
    path("blog/",views.blogs,name='blog'),
    path("casestudies/",views.casestudy,name='casestudies'),
    path("A1/",views.article1,name='A1'),
]