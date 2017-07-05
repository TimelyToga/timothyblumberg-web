__author__ = 'Tim'

try: import simplejson as json
except ImportError: import json
from django.http import HttpResponse
from django.template import RequestContext, loader


def skills(request):
    template = loader.get_template('skills.html')
    context = RequestContext(request, {})
    return HttpResponse(template.render(context))


def resume(request):
    template = loader.get_template('resume.html')
    context = RequestContext(request, {})
    return HttpResponse(template.render(context))


def juneway(request):
    template = loader.get_template('juneway.html')
    context = RequestContext(request, {})
    return HttpResponse(template.render(context))


def new_lander(request):
    template = loader.get_template('new_lander.html')
    context = RequestContext(request, {})
    return HttpResponse(template.render(context))


def home(request):
    template = loader.get_template('main.html')
    context = RequestContext(request, {})
    return HttpResponse(template.render(context))


def about(request):
    template = loader.get_template('about.html')
    context = RequestContext(request, {})
    return HttpResponse(template.render(context))


def china(request):
    template = loader.get_template('chinese.html')
    context = RequestContext(request, {})
    return HttpResponse(template.render(context))