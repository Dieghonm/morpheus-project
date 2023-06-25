from flask import Blueprint, request, jsonify
from DB_updates.loginDB import get_users, new_user, get_class, get_races, get_armas, get_armaduras

login_blueprint = Blueprint('login', __name__)

@login_blueprint.route("/login", methods=["GET"])
def login_get():
    if request.method == "GET":
        users = get_users()
        classes = get_class()
        racas = get_races()
        armas = get_armas()
        armaduras = get_armaduras()
        answer = [users, classes,racas, armaduras, armas]

        return jsonify(answer)

@login_blueprint.route("/login", methods=["POST"])
def login_post():
    if request.method == "POST":
        data = request.json
        name = data.get("name")
        email = data.get("email")
        answer = new_user(name, email)
        
        return jsonify(answer)

