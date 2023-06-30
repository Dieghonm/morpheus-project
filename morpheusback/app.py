from flask import Flask
from DB_init.criate_DB import criate_DB
from dotenv import load_dotenv
from flask_cors import CORS
from routes.login_routes import login_blueprint
from routes.token_routes import token_blueprint
from routes.equipment_routes import equipment_blueprint


load_dotenv()
criate_DB()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

@app.route("/")
def home():
    return "Backend está funcionando!"

app.register_blueprint(login_blueprint)
app.register_blueprint(token_blueprint)
app.register_blueprint(equipment_blueprint)

if __name__ == "__main__":
    app.run()
