from flask import Blueprint, request, jsonify
from DB.loginDB import get_users, new_user

login_blueprint = Blueprint('login', __name__)

@login_blueprint.route("/login", methods=["GET"])
def login_get():
    if request.method == "GET":
        answer = get_users()
        return jsonify(answer)

@login_blueprint.route("/login", methods=["POST"])
def login_post():
    if request.method == "POST":
        data = request.json
        name = data.get("name")
        email = data.get("email")
        answer = new_user(name, email)
        
        return jsonify(answer)

