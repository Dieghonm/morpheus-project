# PARA RODAR "python database.py"
import os
import mysql.connector
from dotenv import load_dotenv

load_dotenv()

db_host = os.getenv("DB_HOST")
db_user = os.getenv("DB_USER")
db_password = os.getenv("DB_PASSWORD")
db_name = os.getenv("DB_NAME")

# Função para criar o banco de dados
def criar_banco():
    conn = mysql.connector.connect(
        host=db_host,
        user=db_user,
        password=db_password
    )
    cursor = conn.cursor()
    create_database_query = f"CREATE DATABASE IF NOT EXISTS {db_name}"
    cursor.execute(create_database_query)
    use_database_query = f"USE {db_name}"
    cursor.execute(use_database_query)
    create_table_query = """
    CREATE TABLE IF NOT EXISTS usuarios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(100),
        email VARCHAR(100),
        role VARCHAR(100)
    )
    """
    cursor.execute(create_table_query)

    # Comando SQL para verificar se o usuário admin já existe
    check_admin_query = "SELECT * FROM usuarios WHERE email = 'dieghonm@gmail.com'"
    cursor.execute(check_admin_query)
    admin_exists = cursor.fetchone()

    if not admin_exists:
        insert_admin_query = """
        INSERT INTO usuarios (nome, email, role)
        VALUES ('diegho', 'dieghonm@gmail.com', 'admin')
        """
        cursor.execute(insert_admin_query)
        conn.commit()
    cursor.close()
    conn.close()

criar_banco()



# Função para obter os dados dos usuários
def obter_dados():
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




