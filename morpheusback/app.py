import mysql.connector
from flask import Flask, jsonify

app = Flask(__name__)

# Configuração da conexão com o banco de dados
conn = mysql.connector.connect(
    host="localhost",
    user="seu_usuario",
    password="sua_senha",
    database="nome_do_banco"
)

# Criação da tabela de contas de usuário
cursor = conn.cursor()
cursor.execute('''CREATE TABLE IF NOT EXISTS accounts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
)''')

# Inserção de uma conta de exemplo
cursor.execute("INSERT INTO accounts (username, email, password) VALUES (%s, %s, %s)",
               ('exemplo', 'exemplo@example.com', 'senha123'))
conn.commit()

# Rota para consultar as contas de usuário
@app.route('/accounts', methods=['GET'])
def get_accounts():
    cursor = conn.cursor()
    cursor.execute("SELECT id, username, email FROM accounts")
    accounts = [{'id': row[0], 'username': row[1], 'email': row[2]} for row in cursor.fetchall()]
    return jsonify(accounts)

# Finalizar a conexão com o banco de dados
conn.close()

if __name__ == '__main__':
    app.run()
