from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'timothyblumberg.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^$', 'timothyblumberg.views.home'),
    url(r'^about$', 'timothyblumberg.views.about')
)
