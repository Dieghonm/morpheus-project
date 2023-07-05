from flask import Blueprint, request, jsonify
from DB_updates.equipmentDB import get_armor

equipment_blueprint = Blueprint('equipment', __name__)

@equipment_blueprint.route("/equipment", methods=["GET"])
def armor_get():
    if request.method == "GET":
        armor = get_armor()
        ranges =  []
        treasure =  []
        other = []

        answer = [armor, ranges, treasure, other]
        return jsonify(answer)