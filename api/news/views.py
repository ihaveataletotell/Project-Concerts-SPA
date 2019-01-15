from rest_framework import generics, permissions
from .models import News
from .serializers import NewsSerializer


class NewsList(generics.ListCreateAPIView):
  permission_classes = (permissions.DjangoModelPermissionsOrAnonReadOnly,)
  serializer_class = NewsSerializer

  def get_serializer_context(self):
    return {'request': self.request}

  def get_queryset(self):
    start = self.request.query_params.get('start', None)
    end = self.request.query_params.get('end', None)
    if start is None:
      start = 0
    if end is 0:
      end = None
    return News.objects.all()[int(start):int(end)]
