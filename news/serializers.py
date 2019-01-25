from rest_framework import serializers
from .models import News
from django.contrib.sites.shortcuts import get_current_site


class NewsSerializer(serializers.ModelSerializer):
  title_thumbnail = serializers.SerializerMethodField()

  def get_title_thumbnail(self, obj):
    if self.context['request']:
      return (
          'http://' + self.context['request'].get_host() +
          obj.title_thumbnail.url
      )

  class Meta:
    model = News
    fields = '__all__'
