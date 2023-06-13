import os
import mysql.connector
from dotenv import load_dotenv

load_dotenv()

db_host = os.getenv("DB_HOST")
db_user = os.getenv("DB_USER")
db_password = os.getenv("DB_PASSWORD")
db_name = os.getenv("DB_NAME")

# Função para obter os dados dos usuários
def get_users():
    conn = mysql.connector.connect(
        host=db_host,
        user=db_user,
        password=db_password,
        database=db_name
    )

    cursor = conn.cursor()
    select_query = "SELECT * FROM usuarios"
    cursor.execute(select_query)
    dados = cursor.fetchall()
    cursor.close()
    conn.close()
    return dados


def new_user(name, email):
    conn = mysql.connector.connect(
        host=db_host,
        user=db_user,
        password=db_password,
        database=db_name
    )

    cursor = conn.cursor()
    insert_query = """
        INSERT INTO usuarios (nome, email, role)
        VALUES ('{}', '{}', 'player')
        """.format(name, email)
    cursor.execute(insert_query)
    conn.commit()
    cursor.close()
    conn.close()
    
    return "Novo usuário cadastrado com sucesso"

