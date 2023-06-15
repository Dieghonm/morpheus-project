from flask import Blueprint, request, jsonify
from DB.tokenDB import get_tokens

token_blueprint = Blueprint('token', __name__)

@token_blueprint.route("/token", methods=["GET"])
def tokens_get():
    if request.method == "GET":
        answer = get_tokens()
        return jsonify(answer)

