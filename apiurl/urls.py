from django.urls import path
from api.views import UserList, UserDetails
from news.views import NewsList


urlpatterns = [
    path('users/', UserList.as_view()),
    path('users/<pk>/', UserDetails.as_view()),
    path('news/', NewsList.as_view()),
]
