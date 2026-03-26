from flask import Flask
from flask_cors import CORS
import os

def create_app():   
    app = Flask(__name__)        
    CORS(app)   
    app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'default-key-for-dev')

    from app.routes.main import main_bp
    app.register_blueprint(main_bp)

    return app