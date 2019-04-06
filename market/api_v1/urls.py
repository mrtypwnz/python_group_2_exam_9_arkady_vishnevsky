from django.urls import include, path
from rest_framework import routers
from api_v1 import views
router = routers.DefaultRouter()

urlpatterns = [
    path('', include(router.urls)),
    path('login/', views.LoginView.as_view(), name='api_token_auth'),
    path('register/', views.UserCreateView.as_view(), name='register'),
]
