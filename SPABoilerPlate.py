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

        # Defaulting cur_dir
        if "cur_dir" not in kwargs:
            self.cur_dir = os.path.curdir

        # Defaulting stock_dirs
        if "stock_dir" not in kwargs:
            self.stock_dir = os.path.join(os.path.curdir, "stock")

        # Defaulting projects_dir
        if "projects_dir" not in kwargs:
            self.projects_dir = os.path.join(os.path.curdir, "projects")

        # Defaulting template_dirs
        if "template_dirs" not in kwargs:
            self.template_dirs = os.path.join(os.path.curdir, "templates")

        # Set all Kwargs to class attributes.
        for key, value in kwargs.items():
            setattr(self, key, value)

    def create_jinja2_env(self):
        """A jinja2 Environment with templates loaded."""
        print("TEMPLATE DIRS: " + self.template_dirs)
        template_loader = jinja2.FileSystemLoader(self.template_dirs)
        template_env = jinja2.Environment(
            loader=template_loader,
        )
        self.env = template_env

    def create_spa(self, name="TestProject", launcher=False):
        """Create Application."""
        # Create Project dir
        os.makedirs(self.projects_dir, exist_ok=True)

        # Throw error if project exists already
        if name in next(os.walk(self.projects_dir))[1]:
            raise ValueError(
                'Project already exists with that name. Try another.')

        # Project Folders
        project_dir = os.path.join(self.projects_dir, name)
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

        # Create the project skeleton (folders)
        for d in project_skeleton:
            os.makedirs(d, exist_ok=True)

        # Render spab files (Spa Boilerplate)
        template_vars = {"name": name, "semantic_name": name}

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
        project_js_file = os.path.join(project_static_js_dir, "%s.js" % name)
        stock_file = os.path.join(self.stock_dir, "spa", "project.js")
        self.stock_project_file(
            stock_file=stock_file,
            new_file=project_js_file,
            template_vars=template_vars)

        # Create project css file
        project_css_file = os.path.join(project_static_css_dir, "%s.css" %
                                        name)
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

                    # Search line for variables.
                    p = re.compile(
                        r'^.*(?P<template_var>__var_(?P<var>.*)__).*$')
                    m = p.search(line)

                    # Variable Found.
                    if m:

                        # Replace variables from template_vars or nothing.
                        if m.group("var") in template_vars:
                            line = line.replace("__var_%s__" % m.group("var"),
                                                template_vars[m.group("var")])
                        else:
                            line = line.replace("__var_%s__" % m.group("var"),
                                                "")

                    # Write line to new file.
                    n.write(line)

        # Return whether new file exists or not.
        return os.path.exists(new_file)


if __name__ == "__main__":
    spa_boiler = SpaBoiler()
    spa_boiler.create_spa(name="testProject", launcher=False)
