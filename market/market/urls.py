from django.conf.urls.static import static
from django.conf import settings
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('webapp.urls', namespace='webapp')),
    path('api/v1/', include(('api_v1.urls', 'api_v1'), namespace='api_v1')),
    path('admin/', admin.site.urls),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
