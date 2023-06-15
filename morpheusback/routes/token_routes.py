from flask import Blueprint, request, jsonify
from DB.tokenDB import get_tokens, get_selected_token

token_blueprint = Blueprint('token', __name__)

@token_blueprint.route("/token", methods=["GET"])
def tokens_get():
    condition = request.args.get('condition')
    if condition == "login":
        answer = get_tokens()
        return jsonify(answer)
    elif condition == "choose_character":
        nome= request.json.get("name")
        print(nome)
        answer = get_selected_token(nome)
        return jsonify(answer)
    else:
        return jsonify("Endpoint não encontrado para esta condição.")
