from flask import Blueprint, request, jsonify

equipment_blueprint = Blueprint('equipment', __name__)

@equipment_blueprint.route("/login", methods=["GET"])
def armor_get():
    if request.method == "GET":
        armor = get_armor()
        answer = armor
        return jsonify(answer)