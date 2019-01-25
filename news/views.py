from rest_framework import generics, permissions
from .models import News
from .serializers import NewsSerializer


class NewsList(generics.ListCreateAPIView):
  permission_classes = (permissions.DjangoModelPermissionsOrAnonReadOnly,)
  serializer_class = NewsSerializer

  def get_serializer_context(self):
    return {'request': self.request}

  def get_queryset(self):
    # start = self.request.query_params.get('start', 0)
    # end = self.request.query_params.get('end', 0)
    return News.objects.all()
