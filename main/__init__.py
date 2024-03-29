import os
from flask import Flask
from flask.ext.bootstrap import Bootstrap
from flask.ext.sqlalchemy import SQLAlchemy

basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__, template_folder=os.path.join(basedir, '../templates'),
            static_folder=os.path.join(basedir, '../static'))

app.config.from_pyfile('../config.cfg')
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:a870621345@162.243.101.188/chat'

bootstrap = Bootstrap(app)
db = SQLAlchemy(app)

from .routes import *
