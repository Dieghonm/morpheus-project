from flask import Blueprint, request, jsonify
from DB_updates.tokenDB import get_tokens, get_selected_token

token_blueprint = Blueprint('token', __name__)

@token_blueprint.route("/token", methods=["GET"])
def tokens_get():
        answer = get_tokens()
        return jsonify(answer)

    
@token_blueprint.route("/token", methods=["POST"])
def tokens_post():
    condition = request.args.get('condition')
    if condition == "choose_character":
        data = request.json
        nome = data.get("nome")
        answer = get_selected_token(nome)
        return jsonify(answer)
    else:
        return jsonify("Endpoint não encontrado para esta condição 2.")
