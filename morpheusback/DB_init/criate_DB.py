import os
import mysql.connector
from dotenv import load_dotenv
from DB_init.dataTable.criate_tables import criate_tables_usuarios, criate_tables_racas, criate_tables_classes, criate_tables_personagens, criate_tables_armas
from DB_init.dataSeeding.user_populate import user_populate
from DB_init.dataSeeding.char_populate import char_populate
from DB_init.dataSeeding.class_populate import class_populate
from DB_init.dataSeeding.races_populate import races_populate
from DB_init.dataSeeding.weapon_populate import weapon_populate

load_dotenv()

db_host = os.getenv("DB_HOST")
db_user = os.getenv("DB_USER")
db_password = os.getenv("DB_PASSWORD")
db_name = os.getenv("DB_NAME")

# Função para criar o banco de dados
def criate_DB():
    conn = mysql.connector.connect(
        host=db_host,
        user=db_user,
        password=db_password
    )
    cursor = conn.cursor()
    create_database_query = f"CREATE DATABASE IF NOT EXISTS {db_name} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci"
    cursor.execute(create_database_query)
    use_database_query = f"USE {db_name}"
    cursor.execute(use_database_query)

    criate_tables_usuarios(cursor)
    criate_tables_racas(cursor)
    criate_tables_classes(cursor)
    criate_tables_personagens(cursor)
    criate_tables_armas(cursor)
   

    user_populate(conn, cursor)
    class_populate(conn, cursor)
    races_populate(conn, cursor)
    weapon_populate(conn, cursor)
    # char_populate(conn, cursor)

    
    cursor.close()
    conn.close()
