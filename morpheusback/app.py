from flask import Flask, jsonify
from database import obter_dados
from database import criar_banco
from dotenv import load_dotenv

# Carrega as variáveis de ambiente do arquivo .env
load_dotenv()

app = Flask(__name__)

@app.route("/")
def home():
    return "Backend está funcionando!"

@app.route("/dados")
def rota_obter_dados():
    dados = obter_dados()
    return jsonify(dados)

if __name__ == "__main__":
    app.run()
