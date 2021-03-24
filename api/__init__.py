import os
from flask import Flask,Blueprint   
from flask_cors import CORS
from flask_pymongo import PyMongo
from . import config
from .routes import dataRoutes,adminRoutes,blog
def create_app():
    app = Flask(__name__)
    app.config.from_object(config.Development())
    CORS(app,origins="*")
    cluster = PyMongo(app)
    app.register_blueprint(dataRoutes.construct_blueprint(cluster))
    app.register_blueprint(adminRoutes.create_blueprint(cluster))
    app.register_blueprint(blog.create_blueprint(cluster))
    return app
