from flask import Blueprint, request, jsonify
from DB.database import obter_dados

login_blueprint = Blueprint('login', __name__)

@login_blueprint.route("/login", methods=["GET"])
def login_get():
    if request.method == "GET":
        answer = obter_dados()
        return jsonify(answer)

@login_blueprint.route("/login", methods=["POST"])
def login_post():
    if request.method == "POST":
        print('post')
        answer = obter_dados()
        return jsonify(answer)

