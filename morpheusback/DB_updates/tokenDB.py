import os
import mysql.connector
from dotenv import load_dotenv

load_dotenv()

db_host = os.getenv("DB_HOST")
db_user = os.getenv("DB_USER")
db_password = os.getenv("DB_PASSWORD")
db_name = os.getenv("DB_NAME")

# Função para obter os dados dos usuários
def get_tokens():
    conn = mysql.connector.connect(
        host=db_host,
        user=db_user,
        password=db_password,
        database=db_name
    )

    cursor = conn.cursor()
    select_query = """
    SELECT usuarios.nome, personagens.nome
    FROM personagens
    JOIN usuarios ON personagens.usuario_id = usuarios.id
    """
    cursor.execute(select_query)
    dados = cursor.fetchall()
    cursor.close()
    conn.close()
    return dados

def get_selected_token(nome):
    conn = mysql.connector.connect(
        host=db_host,
        user=db_user,
        password=db_password,
        database=db_name
    )

    cursor = conn.cursor()
    # select_query = "SELECT * FROM personagens WHERE nome = %s"
    select_query = """
        SELECT *
        FROM personagens
        JOIN racas ON personagens.raca_id = racas.id
        JOIN classes ON personagens.classe_id = classes.id
        WHERE personagens.nome = %s
    """
    cursor.execute(select_query, (nome,))
    # field_names = [field[0] for field in cursor.description]
    dados = cursor.fetchall()
    cursor.close()
    conn.close()
    # return field_names, dados
    return dados


    # select_query = """

    # """

