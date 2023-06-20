def criate_tables_usuarios(cursor):
    criar_tabela_usuarios_query = """
    CREATE TABLE IF NOT EXISTS usuarios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(20),
        email VARCHAR(100) UNIQUE,
        role VARCHAR(10) DEFAULT 'Jogador'
    )
    """
    cursor.execute(criar_tabela_usuarios_query)

def criate_tables_personagens(cursor):
    criar_tabela_personagens_query = """
    CREATE TABLE IF NOT EXISTS personagens (
        id INT AUTO_INCREMENT PRIMARY KEY,
        usuarios_id INT,
        nome VARCHAR(100) UNIQUE,
        classe_id INT,
        raca_id INT,
        nivel INT DEFAULT 1,
        raca VARCHAR(20) DEFAULT 'Humano',
        pontos_vida INT DEFAULT 10,
        experiencia INT DEFAULT 0,
        forca INT DEFAULT 10,
        destreza INT DEFAULT 10,
        constituicao INT DEFAULT 10,
        inteligencia INT DEFAULT 10,
        sabedoria INT DEFAULT 10,
        carisma INT DEFAULT 10,
        resistencia VARCHAR(100),
        skills  VARCHAR(100),
        FOREIGN KEY (usuarios_id) REFERENCES usuarios(id),
        FOREIGN KEY (classe_id) REFERENCES classes(id),
        FOREIGN KEY (raca_id) REFERENCES racas(id)
    )
    """
    cursor.execute(criar_tabela_personagens_query)

def criate_tables_racas(cursor):
    criar_tabela_racas_query = """
    CREATE TABLE IF NOT EXISTS racas (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(20) UNIQUE,
        idioma VARCHAR(40),
        atributo VARCHAR(100),
        movimentacao INT,
        habilidades VARCHAR(500)
    )
    """
    cursor.execute(criar_tabela_racas_query)

def criate_tables_classes(cursor):
    criar_tabela_classes_query = """
    CREATE TABLE IF NOT EXISTS classes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(20) UNIQUE,
        dado_vida VARCHAR(5) DEFAULT 'd8',
        habilidades VARCHAR(500)
    )
    """
    cursor.execute(criar_tabela_classes_query)


def criate_tables_armas(cursor):
    criar_tabela_armas_query = """
    CREATE TABLE IF NOT EXISTS armas (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(20) UNIQUE,
        preco VARCHAR(5),
        dano VARCHAR(20),
        peso VARCHAR(10),
        propriedades VARCHAR(100) DEFAULT null
    );
    """
    cursor.execute(criar_tabela_armas_query)

# def criate_tables_(cursor):

