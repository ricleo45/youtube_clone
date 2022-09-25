from django.urls import path
from youtube_comments import views

urlpatterns = [
    path('', views.user_comments),
    path('all/', views.get_all_comments),
    path('<str:video_id>/', views.video_id_comments)
]