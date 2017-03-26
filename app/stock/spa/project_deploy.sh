#!/bin/bash
# deploy_project - A script to Deploy a SPA Boiler plate site.

# Global Vars
APACHE_SITES_DIR="/etc/apache2/sites-available"
APACHE_CONF_FILE="$1.conf"
SITES_DIR="/var/www"
SPABOILER_DIR="$SITES_DIR/spaboilerplate2017"
SPAPROJECTS_DIR="$SPABOILER_DIR/app/projects"
VENV_DIR="/ENVS"
PROJECT_DIR="$SPAPROJECTS_DIR/$1"
DEPLOYED_PROJECT_DIR="$SITES_DIR/$1"



# Copy Project to apach2 deployment directory 
cp -r $PROJECT_DIR $SITES_DIR
echo "Copied $PROJECT_DIR to $SITES_DIR"


# Change permissions to apache user www-data:www-data
chown -R www-data:www-data $DEPLOYED_PROJECT_DIR
echo "changed user permissions for $DEPLOYED_PROJECT_DIR"


# Create a virtualenv, if it doesn't already exists
virtualenv -p python3.5 $VENV_DIR/$1
echo "Created virtual env $VENV_DIR/$1"

# Activate the environment and install requirements
. $VENV_DIR/$1/bin/activate
pip3 install -r $DEPLOYED_PROJECT_DIR/requirements.txt
echo "Installing Requirements"


# Copy apach2 conf file to sites-available
cp $DEPLOYED_PROJECT_DIR/$1.conf $APACHE_SITES_DIR
echo "cp $DEPLOYED_PROJECT_DIR/$APACHE_CONF_FILE $APACHE_SITES_DIR"


# Enable the site
a2ensite $APACHE_SITES_DIR/$1.conf
echo "Enabled apache site: $APACHE_SITES_DIR/$APACHE_CONF_FILE"


# Enable the mods
a2enmod wsgi
a2enmod ssl
echo "Enabled Apache2 mods"


# Lets Encrypt
letsencrypt -n --apache -d $1.zinglax.com
echo "letsencrypt"

# Restart the apache server
service apache2 restart

echo "restarting apache"	