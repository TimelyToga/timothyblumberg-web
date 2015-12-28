"""
Django settings for timothyblumberg project.

For more information on this file, see
https://docs.djangoproject.com/en/1.6/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.6/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os
BASE_DIR = os.path.dirname(os.path.dirname(__file__))
APP_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', 'app'))
STATIC_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'static'))
# STATIC_DIR = os.path.abspath(os.path.join(BASE_DIR, 'static'))
FONTS_DIR = os.path.abspath(os.path.join(STATIC_DIR, 'fonts'))
FAVICON = os.path.abspath(os.path.join(STATIC_DIR, 'favicon.ico'))
JS_DIR = os.path.abspath(os.path.join(STATIC_DIR, 'js'))
CSS_DIR = os.path.abspath(os.path.join(STATIC_DIR, 'css'))
SCSS_DIR = os.path.abspath(os.path.join(STATIC_DIR, 'scss'))
IMG_DIR = os.path.abspath(os.path.join(STATIC_DIR, 'img'))


TEMPLATE_DIRS = os.path.abspath(os.path.join('timothyblumberg', 'templates'))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.6/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'dx*ywrdb050t9e69%=2s9_q43l3sc)+&06tpu25g46cba&(#8!'

# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = True

TEMPLATE_DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
)

ROOT_URLCONF = 'timothyblumberg.urls'

WSGI_APPLICATION = 'timothyblumberg.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.6/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

# Internationalization
# https://docs.djangoproject.com/en/1.6/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Parse database configuration from $DATABASE_URL
import dj_database_url
DATABASES['default'] =  dj_database_url.config()

# Honor the 'X-Forwarded-Proto' header for request.is_secure()
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

# Allow all host headers
ALLOWED_HOSTS = ['*']

# Static asset configuration
import os
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
STATIC_ROOT = 'staticfiles'
STATIC_URL = '/static/'

STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'static'),
)
