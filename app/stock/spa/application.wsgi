import os, sys

VENV_DIR  = '/ENVS'
VENV_NAME = '__var_venv_name__'

sys.path.insert(0, os.path.join(VENV_DIR, VENV_NAME))
sys.path.insert(0, os.path.join("/", "var", "www", "__var_project_name__"))

def execfile(filename):
    globals = dict( __file__ = filename )
    exec( open(filename).read(), globals )

activate_this = os.path.join(VENV_DIR, VENV_NAME, 'bin', 'activate_this.py')
execfile(activate_this)
#execfile(activate_this, dict(__file__=activate_this))


from app import app 
application = app