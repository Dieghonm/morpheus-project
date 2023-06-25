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
    print(name, email)
    cursor = conn.cursor()
    
    # Verifica se o email já foi cadastrado
    check_email_query = "SELECT * FROM usuarios WHERE email = %s"
    cursor.execute(check_email_query, (email,))
    existing_user = cursor.fetchone()
    if existing_user:
        cursor.close()
        conn.close()
        return "Email já cadastrado"
    
    # Insere o novo usuário na tabela
    insert_query = """
        INSERT INTO usuarios (nome, email, role)
        VALUES (%s, %s, 'player')
        """
    cursor.execute(insert_query, (name, email))
    conn.commit()
    cursor.close()
    conn.close()

    return "Novo usuário cadastrado com sucesso"

def get_class():
    conn = mysql.connector.connect(
        host=db_host,
        user=db_user,
        password=db_password,
        database=db_name
    )

    cursor = conn.cursor()
    select_query = "SELECT nome FROM classes"
    cursor.execute(select_query)
    dados = cursor.fetchall()
    cursor.close()
    conn.close()
    return [dado[0] for dado in dados]

def get_races():
    conn = mysql.connector.connect(
        host=db_host,
        user=db_user,
        password=db_password,
        database=db_name
    )

    cursor = conn.cursor()
    select_query = "SELECT nome FROM racas"
    cursor.execute(select_query)
    racas = cursor.fetchall()
    cursor.close()
    conn.close()
    
    return [raca[0] for raca in racas]


def get_armas():
    conn = mysql.connector.connect(
        host=db_host,
        user=db_user,
        password=db_password,
        database=db_name
    )

    cursor = conn.cursor()
    select_query = "SELECT nome FROM armas"
    cursor.execute(select_query)
    dados = cursor.fetchall()
    cursor.close()
    conn.close()
    return [dado[0] for dado in dados]

def get_armaduras():
    conn = mysql.connector.connect(
        host=db_host,
        user=db_user,
        password=db_password,
        database=db_name
    )

    cursor = conn.cursor()
    select_query = "SELECT nome FROM armaduras"
    cursor.execute(select_query)
    dados = cursor.fetchall()
    cursor.close()
    conn.close()
    return [dado[0] for dado in dados]