"""SPA Boiler Plate."""
import jinja2
import os
import re


class SpaBoiler():
    """Class to manage generation and storage of new SPA's."""

    def __init__(self, **kwargs):
        """Init for Project."""
        required_kwargs = []
        if not all(arg in kwargs for arg in required_kwargs):
            raise ValueError(
                'Not all required key word arguments have been passed in')

        # Set all Kwargs to class attributes.
        for key, value in kwargs.items():
            setattr(self, key, value)

        # Defaulting cur_dir
        if "cur_dir" not in kwargs:
            self.cur_dir = os.path.curdir

        # Defaulting stock_dirs
        if "stock_dir" not in kwargs:
            self.stock_dir = os.path.join(self.cur_dir, "stock")

        # Defaulting projects_dir
        if "projects_dir" not in kwargs:
            self.projects_dir = os.path.join(self.cur_dir, "projects")

        # Defaulting template_dirs
        if "template_dirs" not in kwargs:
            self.template_dirs = os.path.join(self.cur_dir, "templates")

    def create_jinja2_env(self):
        """A jinja2 Environment with templates loaded."""
        print("TEMPLATE DIRS: " + self.template_dirs)
        print()
        template_dirs = [x[0] for x in os.walk(self.template_dirs)]
        template_loader = jinja2.FileSystemLoader(template_dirs)
        template_env = jinja2.Environment(loader=template_loader, )
        self.env = template_env

    def create_spa(self, **kwargs):
        """Create Application."""
        # Create Project dir
        os.makedirs(self.projects_dir, exist_ok=True)

        # Throw error if project exists already
        if kwargs["name"] in next(os.walk(self.projects_dir))[1]:
            raise ValueError(
                'Project already exists with that name. Try another.')

        # Project Folders
        project_dir = os.path.join(self.projects_dir, kwargs["name"])
        project_app_dir = os.path.join(project_dir, "app")
        project_static_dir = os.path.join(project_app_dir, "static")
        project_static_css_dir = os.path.join(project_static_dir, "css")
        project_static_js_dir = os.path.join(project_static_dir, "js")
        project_templates_dir = os.path.join(project_app_dir, "templates")
        project_templates_actions_dir = os.path.join(project_templates_dir,
                                                     "actions")

        # Project Folder Skeleton
        project_skeleton = [
            project_dir,
            project_app_dir,
            project_static_dir,
            project_static_css_dir,
            project_static_js_dir,
            project_templates_dir,
            project_templates_actions_dir,
        ]

        print(project_skeleton)

        # Create the project skeleton (folders)
        for d in project_skeleton:
            os.makedirs(d, exist_ok=True)

        # Render spab files (Spa Boilerplate)
        template_vars = {
            "semantic_name": kwargs["semantic_name"],
            "name": kwargs["name"],
            "pooled_server_ip": kwargs["pooled_server_ip"],
            "ssh_key": kwargs["ssh_key"],
            "project_name": kwargs["project_name"],
            "project_path": kwargs["project_path"],
            "venv_name": kwargs["venv_name"],
            "production_subdomain": kwargs["production_subdomain"],
            "development_subdomain": kwargs["development_subdomain"],
        }

        print(template_vars)

        # Create application.wsgi
        wsgi_file = os.path.join(project_dir, "application.wsgi")
        stock_file = os.path.join(self.stock_dir, "spa", "application.wsgi")
        self.stock_project_file(
            stock_file=stock_file,
            new_file=wsgi_file,
            template_vars=template_vars)

        # Create apache.conf
        apache_file = os.path.join(project_dir,
                                   kwargs["project_name"] + ".conf")
        stock_file = os.path.join(self.stock_dir, "spa", "apache.conf")
        self.stock_project_file(
            stock_file=stock_file,
            new_file=apache_file,
            template_vars=template_vars)

        # Create fabfile.py
        fabfile_file = os.path.join(project_dir, "fabfile.py")
        stock_file = os.path.join(self.stock_dir, "spa", "fabfile.py")
        self.stock_project_file(
            stock_file=stock_file,
            new_file=fabfile_file,
            template_vars=template_vars)

        # Create requirements.txt
        requirements_file = os.path.join(project_dir, "requirements.txt")
        stock_file = os.path.join(self.stock_dir, "spa", "requirements.txt")
        self.stock_project_file(
            stock_file=stock_file,
            new_file=requirements_file,
            template_vars=template_vars)

        # Create config.py
        config_file = os.path.join(project_dir, "config.py")
        stock_file = os.path.join(self.stock_dir, "spa", "config.py")
        self.stock_project_file(
            stock_file=stock_file,
            new_file=config_file,
            template_vars=template_vars)

        # Create run.py
        run_file = os.path.join(project_dir, "run.py")
        stock_file = os.path.join(self.stock_dir, "spa", "run.py")
        self.stock_project_file(
            stock_file=stock_file,
            new_file=run_file,
            template_vars=template_vars)

        # Create __init__.py
        init_file = os.path.join(project_app_dir, "__init__.py")
        stock_file = os.path.join(self.stock_dir, "spa", "__init__.py")
        self.stock_project_file(
            stock_file=stock_file,
            new_file=init_file,
            template_vars=template_vars)

        # Create views.py
        views_file = os.path.join(project_app_dir, "views.py")
        stock_file = os.path.join(self.stock_dir, "spa", "views.py")
        self.stock_project_file(
            stock_file=stock_file,
            new_file=views_file,
            template_vars=template_vars)

        # Create project js file
        project_js_file = os.path.join(project_static_js_dir,
                                       "%s.js" % kwargs["name"])
        stock_file = os.path.join(self.stock_dir, "spa", "project.js")
        self.stock_project_file(
            stock_file=stock_file,
            new_file=project_js_file,
            template_vars=template_vars)

        # Create project css file
        project_css_file = os.path.join(project_static_css_dir,
                                        "%s.css" % kwargs["name"])
        stock_file = os.path.join(self.stock_dir, "spa", "project.css")
        self.stock_project_file(
            stock_file=stock_file,
            new_file=project_css_file,
            template_vars=template_vars)

        # Create init jinja file
        init_jinja_file = os.path.join(project_templates_actions_dir,
                                       "init.jinja")
        stock_file = os.path.join(self.stock_dir, "spa", "init.jinja")
        self.stock_project_file(
            stock_file=stock_file,
            new_file=init_jinja_file,
            template_vars=template_vars)

        # Create base html file
        base_file = os.path.join(project_templates_dir, "base.html")
        stock_file = os.path.join(self.stock_dir, "spa", "base.html")
        self.stock_project_file(
            stock_file=stock_file,
            new_file=base_file,
            template_vars=template_vars)

        # Create index html file
        index_file = os.path.join(project_templates_dir, "index.html")
        stock_file = os.path.join(self.stock_dir, "spa", "index.html")
        self.stock_project_file(
            stock_file=stock_file,
            new_file=index_file,
            template_vars=template_vars)

    def create_spa_with_pages(self, **kwargs):
        """Create Application."""
        # Create Project dir
        os.makedirs(self.projects_dir, exist_ok=True)

        # Throw error if project exists already
        if kwargs["name"] in next(os.walk(self.projects_dir))[1]:
            raise ValueError(
                'Project already exists with that name. Try another.')

        # Project Folders
        project_dir = os.path.join(self.projects_dir, kwargs["name"])
        project_app_dir = os.path.join(project_dir, "app")
        project_static_dir = os.path.join(project_app_dir, "static")
        project_static_css_dir = os.path.join(project_static_dir, "css")
        project_static_js_dir = os.path.join(project_static_dir, "js")
        project_templates_dir = os.path.join(project_app_dir, "templates")
        project_templates_actions_dir = os.path.join(project_templates_dir,
                                                     "actions")

        # Project Folder Skeleton
        project_skeleton = [
            project_dir,
            project_app_dir,
            project_static_dir,
            project_static_css_dir,
            project_static_js_dir,
            project_templates_dir,
            project_templates_actions_dir,
        ]

        print(project_skeleton)

        # Create the project skeleton (folders)
        for d in project_skeleton:
            os.makedirs(d, exist_ok=True)

        # Render spab files (Spa Boilerplate)
        template_vars = {
            "semantic_name": kwargs["semantic_name"],
            "name": kwargs["name"],
            "pooled_server_ip": kwargs["pooled_server_ip"],
            "ssh_key": kwargs["ssh_key"],
            "project_name": kwargs["project_name"],
            "project_path": kwargs["project_path"],
            "venv_name": kwargs["venv_name"],
            "production_subdomain": kwargs["production_subdomain"],
            "development_subdomain": kwargs["development_subdomain"],
        }

        print(template_vars)

        # Create application.wsgi
        wsgi_file = os.path.join(project_dir, "application.wsgi")
        stock_file = os.path.join(self.stock_dir, "spa", "application.wsgi")
        self.stock_project_file(
            stock_file=stock_file,
            new_file=wsgi_file,
            template_vars=template_vars)

        # Create apache.conf
        apache_file = os.path.join(project_dir,
                                   kwargs["project_name"] + ".conf")
        stock_file = os.path.join(self.stock_dir, "spa", "apache.conf")
        self.stock_project_file(
            stock_file=stock_file,
            new_file=apache_file,
            template_vars=template_vars)

        # Create fabfile.py
        fabfile_file = os.path.join(project_dir, "fabfile.py")
        stock_file = os.path.join(self.stock_dir, "spa", "fabfile.py")
        self.stock_project_file(
            stock_file=stock_file,
            new_file=fabfile_file,
            template_vars=template_vars)

        # Create requirements.txt
        requirements_file = os.path.join(project_dir, "requirements.txt")
        stock_file = os.path.join(self.stock_dir, "spa", "requirements.txt")
        self.stock_project_file(
            stock_file=stock_file,
            new_file=requirements_file,
            template_vars=template_vars)

        # Create config.py
        config_file = os.path.join(project_dir, "config.py")
        stock_file = os.path.join(self.stock_dir, "spa", "config.py")
        self.stock_project_file(
            stock_file=stock_file,
            new_file=config_file,
            template_vars=template_vars)

        # Create run.py
        run_file = os.path.join(project_dir, "run.py")
        stock_file = os.path.join(self.stock_dir, "spa", "run.py")
        self.stock_project_file(
            stock_file=stock_file,
            new_file=run_file,
            template_vars=template_vars)

        # Create __init__.py
        init_file = os.path.join(project_app_dir, "__init__.py")
        stock_file = os.path.join(self.stock_dir, "spa", "__init__.py")
        self.stock_project_file(
            stock_file=stock_file,
            new_file=init_file,
            template_vars=template_vars)

        # Create views.py
        # Will be created with pages
        self.create_jinja2_env()
        routes = []

        # action_templates = os.path.join(app.config['TEMPLATES_DIR'], 'routes')
        # template_dirs = [x[0] for x in os.walk(action_templates)]
        # jinja_env = self.create_jinja2_env(template_dirs=template_dirs)

        for page in kwargs["pages"]:

            # Default Template
            template = "default_ajax_action"

            # Check if page uses another template. ie home page
            if "is_home" in page and page["is_home"]:
                template = "default_home_ajax_action"

            # Render the routes template with its data    
            route = self.env.get_template("%s.jinja" % template).render(
                data={"name": page["name"]})
            routes.append(route)

            # Write Routes to views.py with routes variable.
            views = self.env.get_template("views.py.jinja").render(
                data={"pages": routes})

            # Write views.py to file
            with open(os.path.join(project_app_dir, "views.py"), "w+") as fh:
                fh.write(views)

            # Create HTML File for the page.
            with open(
                    os.path.join(project_templates_dir, "%s.html" %
                                 page["name"]), "w+") as fh:
                fh.write(page["html"])

        # Create project js file
        project_js_file = os.path.join(project_static_js_dir,
                                       "%s.js" % kwargs["name"])
        stock_file = os.path.join(self.stock_dir, "spa", "project.js")
        self.stock_project_file(
            stock_file=stock_file,
            new_file=project_js_file,
            template_vars=template_vars)

        # Create project css file
        project_css_file = os.path.join(project_static_css_dir,
                                        "%s.css" % kwargs["name"])
        stock_file = os.path.join(self.stock_dir, "spa", "project.css")
        self.stock_project_file(
            stock_file=stock_file,
            new_file=project_css_file,
            template_vars=template_vars)

        # Create init jinja file
        init_jinja_file = os.path.join(project_templates_actions_dir,
                                       "init.jinja")
        stock_file = os.path.join(self.stock_dir, "spa", "init.jinja")
        self.stock_project_file(
            stock_file=stock_file,
            new_file=init_jinja_file,
            template_vars=template_vars)

        # Create base html file
        base_file = os.path.join(project_templates_dir, "base.html")
        stock_file = os.path.join(self.stock_dir, "spa", "base.html")
        self.stock_project_file(
            stock_file=stock_file,
            new_file=base_file,
            template_vars=template_vars)

        # Create index html file
        index_file = os.path.join(project_templates_dir, "index.html")
        stock_file = os.path.join(self.stock_dir, "spa", "index.html")
        self.stock_project_file(
            stock_file=stock_file,
            new_file=index_file,
            template_vars=template_vars)

    def stock_project_file(self, **kwargs):
        """Provide file with variables then stock the project with it."""
        required_kwargs = ["stock_file", "new_file", "template_vars"]
        if not all(arg in kwargs for arg in required_kwargs):
            raise ValueError(
                'Not all required key word arguments have been passed in')

        # Assign Keyword arguments
        stock_file = kwargs['stock_file']
        new_file = kwargs['new_file']
        template_vars = kwargs['template_vars']

        # Open the Stock File.
        with open(stock_file, "r") as f:

            # Open the new file.
            with open(new_file, "w+") as n:

                # Loop every line in the stock file.
                for line in f:

                    # For
                    for var in template_vars:

                        # Search line for variables.
                        p = re.compile(
                            r'^.*(?P<template_var>__var_(?P<var>.*)__).*$')
                        m = p.search(line)

                        # Variable Found.
                        if m:

                            # Replace variables from template_vars or nothing.
                            if m.group("var") in template_vars:
                                line = line.replace(
                                    "__var_%s__" % m.group("var"),
                                    template_vars[m.group("var")])
                            else:
                                line = line.replace("__var_%s__" %
                                                    m.group("var"), "")

                    # Write line to new file.
                    n.write(line)

        # Return whether new file exists or not.
        return os.path.exists(new_file)


if __name__ == "__main__":
    spa_boiler = SpaBoiler()
    spa_boiler.create_spa(
        semantic_name="spaboilerplate2017",
        name="spaboilerplate2017",
        pooled_server_ip="104.131.106.63",
        ssh_key="/home/dylan/.ssh/digital_ocean",
        project_name="spaboilerplate2017",
        project_path="/home/dylan/Desktop/GITHUBS/SPA-BoilerPlate2017/projects/spaboilerplate2017",
        venv_name="spaboilerplate2017",
        production_subdomain="spaboilerplate2017",
        development_subdomain="dev.spaboilerplate2017")
