import os
import mysql.connector
from dotenv import load_dotenv

load_dotenv()

db_host = os.getenv("DB_HOST")
db_user = os.getenv("DB_USER")
db_password = os.getenv("DB_PASSWORD")
db_name = os.getenv("DB_NAME")

def connect_to_database():
    return mysql.connector.connect(
        host=db_host,
        user=db_user,
        password=db_password,
        database=db_name
    )

def get_tokens():
    conn = connect_to_database()
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
    conn = connect_to_database()
    cursor = conn.cursor()
    select_query = """
        SELECT *
        FROM personagens
        JOIN racas ON personagens.raca_id = racas.id
        JOIN classes ON personagens.classe_id = classes.id
        WHERE personagens.nome = %s
    """
    cursor.execute(select_query, (nome,))
    dados = cursor.fetchall()

    columns = [column[0] for column in cursor.description]
    result = []
    for row in dados:
        result.append(dict(zip(columns, row)))

    cursor.close()
    conn.close()
    return result


def new_personagem(usuario_id, nome, classe_id, raca_id, skills):
    conn = connect_to_database()
    cursor = conn.cursor()

    check_personagem_query = "SELECT * FROM personagens WHERE nome = %s"
    cursor.execute(check_personagem_query, (nome,))
    personagem_exists = cursor.fetchone()

    if personagem_exists:
        print("Personagem já existe.")
    else:
        insert_personagem_query = """
        INSERT INTO personagens (usuario_id, nome, classe_id, raca_id, skills)
        VALUES (%s, %s, %s, %s, %s)
        """
        cursor.execute(insert_personagem_query, (usuario_id, nome, classe_id, raca_id, skills))
        conn.commit()
        print("Novo personagem cadastrado com sucesso.")
    
    cursor.close()
    conn.close()
