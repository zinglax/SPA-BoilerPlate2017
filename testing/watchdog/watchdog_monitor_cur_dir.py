"""SPA BoilerPlate 2017 Deployment.

AUTHOR: Dylan James Zingler
PURPOSE: Monitor projects and deploy a site when necessary.
"""
import sys
import time
import logging
import os
import subprocess
from watchdog.observers import Observer
from watchdog.events import LoggingEventHandler
from watchdog.events import FileSystemEventHandler


def log(s):
    print('[Monitor] %s' % s)


class MyFileSystemEventHander(FileSystemEventHandler):
    def __init__(self):
        super(MyFileSystemEventHander, self).__init__()

    def on_any_event(self, event):
        if event.src_path.endswith('.conf'):
            log('Apache conf file changed: %s' % event.src_path)
            project_folder = os.path.abspath(os.path.join(event.src_path, os.pardir))
            project_name = os.path.basename(os.path.normpath(project_folder))
            print(project_name)
            print(project_folder)

            cmd = ['/var/www/spaboilerplate2017/project_deploy.sh', project_name]
            cwd = os.getcwd()
            p = subprocess.Popen(cmd, stdout=subprocess.PIPE, cwd=cwd)
            output = ""
            for line in p.stdout:
                output = output + line.decode("utf-8")
            p.wait()

if __name__ == "__main__":
    # logging.basicConfig(level=logging.INFO,
    #                     format='%(asctime)s - %(message)s',
    #                     datefmt='%Y-%m-%d %H:%M:%S')
    # path = sys.argv[1] if len(sys.argv) > 1 else '.'
    # event_handler = LoggingEventHandler()
    # observer = Observer()
    # observer.schedule(event_handler, path, recursive=True)
    # observer.start()
    # try:
    #     while True:
    #         time.sleep(1)
    # except KeyboardInterrupt:
    #     observer.stop()
    # observer.join()

    # Custom observer watching /var/www/spaboilerplate2017/app/projects
    path = "/var/www/spaboilerplate2017/app/projects"
    #path = "/home/dylan/Desktop/GITHUBS/SPA-BoilerPlate2017/testing/watchdog"
    observer = Observer()
    observer.schedule(
        MyFileSystemEventHander(), path, recursive=True)
    observer.start()
    log('Watching directory %s...' % path)
    try:
        while True:
            time.sleep(0.5)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()
