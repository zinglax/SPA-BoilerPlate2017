from pymongo import MongoClient
import os

WTF_CSRF_ENABLED = True
SECRET_KEY = 'Put your secret key here'

# Path variables
CURR_DIR = os.getcwd()
APP_NAME = "__var_name__"
VENV_NAME = "__var_name__"
APP_DIR = os.path.join(CURR_DIR, "app")
STATIC_DIR = os.path.join(APP_DIR, "static")
PROD_DIR = "/var/www/__var_name__"

# DEBUG ON/OFF
DEBUG = True

# HOME DIRECTORY
HOME_DIR = APP_DIR
os.makedirs(HOME_DIR, exist_ok=True)


# TEMPLATES DIRECTORY
TEMPLATES_DIR = os.path.join(APP_DIR, "templates")
