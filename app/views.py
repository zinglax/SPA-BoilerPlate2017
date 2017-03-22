import os
from app import app
from flask import render_template, request, jsonify, url_for, flash, redirect, send_from_directory
import json
import jinja2

from .SPABoilerPlate import SpaBoiler

script_args = {}

script_args["meta_theme_color"] = "#343D44"


@app.route('/', methods=['GET', 'POST'])
def page_index():
    page_args = script_args.copy()

    # AJAX Action Occurs.
    if request.method == 'POST' and 'action' in request.get_json():
        return process_ajax_action(request, page_args=page_args)
    return render_template('./index.html', **page_args)


@app.route('/download_project/<path:path>')
def send_project_download(path):
    return send_from_directory(app.config['PROJECTS_DIR'], path)


def process_ajax_action(request, **kwargs):
    """AJAX Action Occurs. Process the specific action & return JSON response.
    """
    print(request.get_json()['action'])

    if 'page_args' in kwargs:
        # Values common to the specific page.
        page_args = kwargs['page_args']

    print(page_args)

    # Actions
    # ==========================================================================
    if request.get_json()['action'] == "init":
        '''init.
        '''
        contents_html = render_html_from_action('init', {})
        return json.dumps({'status': 'OK', "init": contents_html})

    if request.get_json()['action'] == "generate_site":
        '''generate_site.
        '''

        # TODO
        # Subprocess create zip file popen and wait for zip to finish
        # Return Genterated path for downloading in json response

        zip_file_path = request.get_json()['data']['domain'] + ".zip"
        print("ZIP FILE:" + zip_file_path)

        contents_html = render_html_from_action(
            'generate_site', {"domain": request.get_json()['data']['domain'],
                              "color": request.get_json()['data']['color'],
                              "zip_file_path": zip_file_path})
        print(contents_html)
        return json.dumps({'status': 'OK',
                           "zip_file_path": zip_file_path,
                           "generate_site": contents_html})

    if request.get_json()['action'] == "post_project_json":
        '''post_project_json.
        '''
        print("post_project_json")

        spa_boiler = SpaBoiler(cur_dir="/var/www/spaboilerplate2017/app/")
        spa_boiler.create_spa_with_pages(
            semantic_name=request.get_json()['data']['domain'],
            name=request.get_json()['data']['domain'],
            pooled_server_ip="104.131.106.63",
            ssh_key="/home/dylan/.ssh/digital_ocean",
            project_name=request.get_json()['data']['domain'],
            project_path="/home/dylan/Desktop/GITHUBS/SPA-BoilerPlate2017/projects/" + request.get_json()['data']['domain'],
            venv_name=request.get_json()['data']['domain'],
            production_subdomain=request.get_json()['data']['domain'],
            development_subdomain="dev." + request.get_json()['data']['domain'],
            pages=request.get_json()['data']['pages'])

        contents_html = render_html_from_action('post_project_json', {})
        print(contents_html)
        print(request.get_json())

        return json.dumps({'status': 'OK', "post_project_json": contents_html})

    # No action found
    return json.dumps({'status': 'OK',
                       'message':
                       'No action for ' + request.get_json()['action']})


def render_html_from_action(action, data):
    """Render HTML For an Action.

    Args:
        action (String): name of the action (for the template file name).
        data (List): Data passed to the template.

    Returns:
        String: Rendered HTML.
    """
    action_templates = os.path.join(app.config['TEMPLATES_DIR'], 'actions')
    template_dirs = [x[0] for x in os.walk(action_templates)]
    jinja_env = create_jinja2_env(template_dirs=template_dirs)

    print(action_templates)
    print(template_dirs)

    # app.logger.info(data)
    return jinja_env.get_template("%s.jinja" % action).render(data=data)


def create_jinja2_env(**kwargs):
    """A jinja2 Environment with templates loaded."""
    print("JINJA2 ENV CREATED")
    if "template_dirs" in kwargs:
        print("TEMPLATE DIRS: " + str(kwargs["template_dirs"]))
        template_loader = jinja2.FileSystemLoader(kwargs["template_dirs"])
    template_env = jinja2.Environment(loader=template_loader)
    return template_env
