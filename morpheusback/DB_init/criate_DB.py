import os
import mysql.connector
from DB_init.dataTable.criate_tables import criate_tables_habilidades, criate_tables_armaduras, criate_tables_usuarios, criate_tables_racas, criate_tables_classes, criate_tables_personagens, criate_tables_armas
from dotenv import load_dotenv
from DB_init.dataTable.criate_tables_M_M import criate_tables_personagem_armaduras, criate_tables_personagem_armas, criate_tables_personagem_habilidades
from DB_init.dataSeeding.user_populate import user_populate
from DB_init.dataSeeding.class_populate import class_populate
from DB_init.dataSeeding.races_populate import races_populate
from DB_init.dataSeeding.weapon_populate import weapon_populate
from DB_init.dataSeeding.armor_populate import armor_populate
from DB_updates.tokenDB import new_personagem


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
    criate_tables_armaduras(cursor)
    criate_tables_habilidades(cursor)
    
    criate_tables_personagem_armaduras(cursor)
    criate_tables_personagem_armas(cursor)
    criate_tables_personagem_habilidades(cursor)
   

    user_populate(conn, cursor)
    class_populate(conn, cursor)
    races_populate(conn, cursor)
    weapon_populate(conn, cursor)
    armor_populate(conn, cursor)
    
    new_personagem(1, "Frekazoid", 3, 1, '[Atuação, Intimidação, Religião]')
    new_personagem(1, "Cosmo", 5, 2, '[Acrobacia, Percepção, Sobrevivência]')

    cursor.close()
    conn.close()
