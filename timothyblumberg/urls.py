from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()
import timothyblumberg.settings

urlpatterns = patterns('',
    url(r'^$', 'timothyblumberg.views.new_lander'),
    url(r'^old_lander', 'timothyblumberg.views.home'),
    url(r'^skills', 'timothyblumberg.views.skills'),
    url(r'^resume', 'timothyblumberg.views.resume'),
    url(r'^juneway', 'timothyblumberg.views.juneway'),
    url(r'^about$', 'timothyblumberg.views.about'),
    url(r'^china', 'timothyblumberg.views.china'),

    (r'^css/(?P<path>.*)$', 'django.views.static.serve', {'document_root': timothyblumberg.settings.CSS_DIR}),
    (r'^img/(?P<path>.*)$', 'django.views.static.serve', {'document_root': timothyblumberg.settings.IMG_DIR}),
    (r'^js/(?P<path>.*)$', 'django.views.static.serve', {'document_root': timothyblumberg.settings.JS_DIR}),
    (r'^favicon.ico$', 'django.views.static.serve',
     {'path': 'favicon.ico', 'document_root': timothyblumberg.settings.STATIC_DIR, 'show_indexes': False} ),
)
