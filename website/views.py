from django.shortcuts import render
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def home(request):
    return render(request, 'website/home.html')
def services(request):
    return render(request,'website/services.html')
def about(request):
    return render(request,'website/about.html')
def contact(request):
    return render(request,'website/contact.html')
def blogs(request):
    return render(request,"website/blogs.html")
def casestudy(request):
    return render(request,'website/case-studies.html')
def portfolio(request):
    return render(request,'website/pop.html')
def article1(request):
    return render(request,"website/A1.html")
