from fabric.colors import *
from fabric.contrib.console import confirm
from contextlib import contextmanager
from fabric.api import *
from fabric.contrib.project import rsync_project
from fabric.contrib.files import exists
import os

env.user = "root"
env.hosts = ['192.241.175.66']
env.key_filename = '/home/dylan/DZLaptop'


def deploy(
        path_to_project="/var/www/",
        project_name="spaboilerplate2017",
        local_dir="/home/dylan/Desktop/GITHUBS/SPA-BoilerPlate2017",
        env_name="spaboilerplate2017",
        remote_env_path="/ENVS",
        path_to_requirements_txt="/var/www/spaboilerplate2017/requirements.txt",
        domain="spaboilerplate2017"):

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
    #run('/opt/letsencrypt/letsencrypt-auto --apache -d zinglax.com -d ' + domain + '.flaskcart.co')
    run('letsencrypt -n --agree-tos --email dylanzingler@gmail.com --apache -d ' + domain + '.flaskcart.co')

    # Restart the apache server
    run('service apache2 restart')


def deploy_prod():
    deploy(domain="spaboilerplate2017")


def deploy_dev():
    deploy(domain="dev.spaboilerplate2017")
