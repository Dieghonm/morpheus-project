# from flask import Flask, request, jsonify
# from DB.criateDB import criar_banco
# from DB.database import obter_dados
# from dotenv import load_dotenv
# from flask_cors import CORS

# load_dotenv()
# criar_banco()

# app = Flask(__name__)
# CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})


# @app.route("/")
# def home():
#     return "Backend está funcionando!"

# @app.route("/login", methods=["GET"])
# def login_get():
#     if request.method == "GET":
#         answer = obter_dados()
#         return jsonify(answer)

# @app.route("/login", methods=["POST"])
# def login_post():
#     if request.method == "POST":
#         print('post')
#         answer = obter_dados()
#         return jsonify(answer)

# if __name__ == "__main__":
#     app.run()
from flask import Flask
from DB.newDB import criar_banco
from dotenv import load_dotenv
from flask_cors import CORS
from routes.login_routes import login_blueprint

load_dotenv()
criar_banco()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

@app.route("/")
def home():
    return "Backend está funcionando!"

app.register_blueprint(login_blueprint)

if __name__ == "__main__":
    app.run()
