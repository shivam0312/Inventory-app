from django.urls import path, include
from rest_framework import routers
from . import views
from rest_framework.authtoken.views import ObtainAuthToken

router = routers.DefaultRouter()
router.register('api/users',views.UserViewSet),
router.register('api/products',views.ProductViewSet)

urlpatterns = [
    path('', include(router.urls)),
    #path('auth/',include('rest_framework.urls', namespace='rest_framework'))
    path('auth/',ObtainAuthToken.as_view()),
]
