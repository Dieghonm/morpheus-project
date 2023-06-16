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
    create_database_query = f"CREATE DATABASE IF NOT EXISTS {db_name} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci"
    cursor.execute(create_database_query)
    use_database_query = f"USE {db_name}"
    cursor.execute(use_database_query)

    # Criação da tabela 'usuarios'
    create_usuarios_table_query = """
    CREATE TABLE IF NOT EXISTS usuarios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(20),
        email VARCHAR(100) UNIQUE,
        role VARCHAR(10) DEFAULT 'Player'
    )
    """
    cursor.execute(create_usuarios_table_query)

   # Criação da tabela 'personagens'
    create_personagens_table_query = """
    CREATE TABLE IF NOT EXISTS personagens (
        id INT AUTO_INCREMENT PRIMARY KEY,
        usuario_id INT,
        nome VARCHAR(20),
        classe VARCHAR(20),
        nivel INT DEFAULT 1,
        raca VARCHAR(10) DEFAULT 'Humano',
        pontos_vida INT DEFAULT 15,
        experiencia INT DEFAULT 0,
        forca INT DEFAULT 10,
        destresa INT DEFAULT 10,
        constituicao INT DEFAULT 10,
        inteligencia INT DEFAULT 10,
        sabedoria INT DEFAULT 10,
        carisma INT DEFAULT 10,
        dado_vida VARCHAR(5) DEFAULT 'd8',
        proficiencia INT DEFAULT 2,
        resistencia VARCHAR(100),
        skills VARCHAR(500),
        FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
    )
    """
    cursor.execute(create_personagens_table_query)

    # Comando SQL para verificar se o usuário admin já existe
    check_admin_query = "SELECT * FROM usuarios WHERE email = 'dieghonm@gmail.com'"
    cursor.execute(check_admin_query)
    admin_exists = cursor.fetchone()

    if not admin_exists:
        insert_admin_query = """
        INSERT INTO usuarios (nome, email, role)
        VALUES ('Diegho', 'dieghonm@gmail.com', 'admin')
        """
        cursor.execute(insert_admin_query)
        conn.commit()

    def new_personagem(usuario_id, nome, classe, resistencia, skills):
        cursor = conn.cursor()
        
        check_personagem_query = "SELECT * FROM personagens WHERE nome = %s"
        cursor.execute(check_personagem_query, (nome,))
        personagem_exists = cursor.fetchone()
        
        if personagem_exists:
            print("Personagem já existe.")
        else:
            insert_personagem_query = """
            INSERT INTO personagens (usuario_id, nome, classe, resistencia, skills)
            VALUES (%s, %s, %s, %s, %s)
            """
            cursor.execute(insert_personagem_query, (usuario_id, nome, classe, resistencia, skills))
            conn.commit()
            print("Novo personagem cadastrado com sucesso.")
        
    new_personagem(1, "Tobias", "Fantoche", '[Força, Sabedoria]', '[Atuação, Intimidação, Religião]')
    new_personagem(1, "P azul generico", "Boneco", '[Constituição, Carisma]', '[Acrobacia, Percepção, Sobrevivência]')

    cursor.close()
    conn.close()
