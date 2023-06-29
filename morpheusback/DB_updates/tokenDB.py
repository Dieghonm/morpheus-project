import os
import mysql.connector
from dotenv import load_dotenv
import json

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
        obj = dict(zip(columns, row))
        obj['id'] = dados[0][0]
        result.append(obj)

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

def edit_personagem(data):
    print('entrei <-------------------------')
    conn = connect_to_database()
    cursor = conn.cursor()

    catch_user_id_query = "SELECT id FROM usuarios WHERE email = %s"
    cursor.execute(catch_user_id_query, (data['email'],))
    user = cursor.fetchone()

    catch_racas_id_query = "SELECT id FROM racas WHERE race_name = %s"
    cursor.execute(catch_racas_id_query, (data['raca'],))
    raca = cursor.fetchone()

    catch_classe_id_query = "SELECT id FROM classes WHERE class_name = %s"
    cursor.execute(catch_classe_id_query, (data['classe'],))
    classe = cursor.fetchone()

    print(type(data['ataques']), data['ataques'])
    
    if data['id'] != 0:
        edit_personagem_query = """
            UPDATE personagens
            SET nome = %s, nivel = %s, experiencia = %s, pontos_vida = %s, skills = %s, ca = %s, raca_id = %s, classe_id = %s, proficiencia = %s, forca = %s, destreza = %s, constituicao = %s, inteligencia = %s, sabedoria = %s, carisma = %s, ataques = %s
            WHERE id = %s
        """
        cursor.execute(edit_personagem_query, ( 
            data['name'], 
            data['nivel'], 
            data['experiencia'], 
            data['pontos_vida'],
            data['skills'], 
            data['ca'], 
            raca[0], 
            classe[0], 
            data['proficiencia'], 
            data['atributos']['Força'], 
            data['atributos']['Destreza'], 
            data['atributos']['Constituição'], 
            data['atributos']['Inteligência'], 
            data['atributos']['Sabedoria'], 
            data['atributos']['Carisma'], 
            data['ataques'], 
            data['id']))
     
        conn.commit()

        cursor.close()
        conn.close()
        return "Personagem editado."
    else:
    #     print(user[0])
        return "criar personagem"
    


    
