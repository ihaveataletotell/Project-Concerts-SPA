from django.db import models
from django.contrib.auth.models import User
import os
from imagekit.processors import ResizeToCover
from imagekit.models import ImageSpecField
# Create your models here.


def image_directory_path(instance, filename):
  file_ext = os.path.splitext(filename)[1]
  new_name = 'title' + file_ext
  return 'news/{0}/{1}'.format(instance.id, new_name)


class News(models.Model):
  class Meta:
    verbose_name_plural = 'news'
    ordering = ['-concert_date']

  title = models.CharField(max_length=100)
  text = models.TextField()
  author = models.ForeignKey(User, on_delete=models.CASCADE)
  pub_date = models.DateTimeField(auto_now=True)
  concert_date = models.DateTimeField(null=True, blank=True)
  title_photo = models.ImageField(
      upload_to=image_directory_path, null=True, blank=True)
  title_thumbnail = ImageSpecField(
      source='title_photo',
      processors=[ResizeToCover(600, 600)],
      format='JPEG',
      options={'quality': 80})

  def __str__(self):
    return self.title
