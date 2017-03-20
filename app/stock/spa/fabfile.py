from fabric.colors import *
from fabric.contrib.console import confirm
from contextlib import contextmanager
from fabric.api import *
from fabric.contrib.project import rsync_project
from fabric.contrib.files import exists
import os

env.user = "root"
env.hosts = ['__var_pooled_server_ip__']
env.key_filename = '__var_ssh_key__'


def deploy(
        path_to_project="/var/www/",
        project_name="__var_project_name__",
        local_dir="__var_project_path__",
        env_name="__var_venv_name__",
        remote_env_path="/ENVS",
        path_to_requirements_txt="/var/www/__var_project_name__/requirements.txt",
        domain="__var_production_subdomain__"):

    # Create a directory on a remote server, if it doesn't already exists
    if not exists(os.path.join(path_to_project, project_name)):
        with cd(path_to_project):
            run('mkdir -p %s' % project_name)

    # Create a virtualenv, if it doesn't already exists
    if not exists(os.path.join(remote_env_path, env_name)):
        with cd(remote_env_path):
            run('virtualenv -p python3.5 %s' % (env_name))

    # Sync the remote directory with the current project directory.
    rsync_project(
        local_dir=local_dir + "/",
        remote_dir=os.path.join(path_to_project, project_name),
        exclude=['.git'])

    # Change permissions to apache user www-data:www-data
    sudo("chown -R www-data:www-data %s" % os.path.join(path_to_project,
                                                        project_name))

    sudo("chmod 755 %s" % os.path.join(path_to_project, project_name))

    # Activate the environment and install requirements
    run('. %s/%s/bin/activate' % (remote_env_path, env_name))
    run('pip3 install -r %s' % path_to_requirements_txt)

    # APACHE2
    apache_conf_file = "%s.conf" % project_name
    apache_conf_path = os.path.join(path_to_project, project_name,
                                    apache_conf_file)

    # Copy apach2 conf file to sites-available
    run('cp %s %s' %
        (apache_conf_path, os.path.join('/etc', 'apache2', 'sites-available')))
    sudo("chown -R www-data:www-data %s" % os.path.join(path_to_project,
                                                        project_name))

    sudo("chmod 755 %s" % os.path.join(path_to_project, project_name))

    # Enable the site
    run('a2ensite %s' % apache_conf_file)

    # Enable the mods
    run('a2enmod wsgi')
    run('a2enmod ssl')

    # Lets Encrypt
    run('letsencrypt -n --apache -d ' + domain + '.zinglax.com')

    # Restart the apache server
    run('service apache2 restart')


def deploy_prod():
    deploy(domain="__var_production_subdomain__")


def deploy_dev():
    deploy(domain="__var_development_subdomain__")
