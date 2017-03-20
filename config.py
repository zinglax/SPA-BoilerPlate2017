from pymongo import MongoClient
import os

WTF_CSRF_ENABLED = True
SECRET_KEY = 'Put your secret key here'

# Path variables
CURR_DIR = os.getcwd()
PROD_DIR = "/var/www/spaboilerplate2017"
APP_NAME = "spaboilerplate2017"
VENV_NAME = "spaboilerplate2017"
APP_DIR = os.path.join(PROD_DIR, "app")
STATIC_DIR = os.path.join(APP_DIR, "static")
PROJECTS_DIR = os.path.join(APP_DIR, "projects")


# DEBUG ON/OFF
DEBUG = True

# HOME DIRECTORY
HOME_DIR = APP_DIR
os.makedirs(HOME_DIR, exist_ok=True)


# TEMPLATES DIRECTORY
TEMPLATES_DIR = os.path.join(APP_DIR, "templates")
