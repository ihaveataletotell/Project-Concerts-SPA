from django.contrib import admin
from .models import News


class NewsAdmin(admin.ModelAdmin):
  date_hierarchy = 'concert_date'
  empty_value_display = '-empty-'
  list_display = ('title', 'pub_date', 'author', 'concert_date')


admin.site.register(News, NewsAdmin)
