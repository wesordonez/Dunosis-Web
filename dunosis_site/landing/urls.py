from django.urls import path
from .views import home, about, services, portfolio

urlpatterns = [
    path('', home, name='home'),
    path('about/', about, name='about'),
    path('services/', services, name='services'),
    path('portfolio/', portfolio, name='portfolio'),
]
