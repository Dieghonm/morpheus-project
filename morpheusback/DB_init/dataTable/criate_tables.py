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
        usuario_id INT,
        nome VARCHAR(100) UNIQUE,
        nivel INT DEFAULT 1,
        experiencia INT DEFAULT 0,
        pontos_vida INT DEFAULT 10,
        forca INT DEFAULT 10,
        destreza INT DEFAULT 10,
        constituicao INT DEFAULT 10,
        inteligencia INT DEFAULT 10,
        sabedoria INT DEFAULT 10,
        carisma INT DEFAULT 10,
        skills  VARCHAR(100),
        ca INT DEFAULT 10,
        raca_id INT,
        classe_id INT,
        proficiencia INT DEFAULT 2,
        armadura VARCHAR(20) DEFAULT 'Sem armadura',
        escudo VARCHAR(20) DEFAULT 'Sem escudo',
        municao VARCHAR(100),
        arremesso VARCHAR(100),
        ataques VARCHAR(500),
        equipamentos VARCHAR(500),
        tesouros VARCHAR(500),

        FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
        FOREIGN KEY (classe_id) REFERENCES classes(id),
        FOREIGN KEY (raca_id) REFERENCES racas(id)
    )
    """
    cursor.execute(criar_tabela_personagens_query)

def criate_tables_racas(cursor):
    criar_tabela_racas_query = """
    CREATE TABLE IF NOT EXISTS racas (
        id INT AUTO_INCREMENT PRIMARY KEY,
        race_name VARCHAR(20) UNIQUE,
        idioma VARCHAR(40),
        atributo VARCHAR(100),
        movimentacao VARCHAR(5),
        habilidades_raciais VARCHAR(500)
    )
    """
    cursor.execute(criar_tabela_racas_query)

def criate_tables_classes(cursor):
    criar_tabela_classes_query = """
    CREATE TABLE IF NOT EXISTS classes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        class_name VARCHAR(20) UNIQUE,
        dado_vida VARCHAR(5) DEFAULT 'd8',
        resistencias VARCHAR(30),
        habilidades_classe VARCHAR(500)

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

def criate_tables_armaduras(cursor):
    criar_tabela_armaduras_query = """
    CREATE TABLE IF NOT EXISTS armaduras (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(16) UNIQUE,
    preco VARCHAR(8),
    classe_armadura VARCHAR(35),
    forca VARCHAR(6),
    furtividade VARCHAR(12),
    peso VARCHAR(8)
    );
    """
    cursor.execute(criar_tabela_armaduras_query)


def criate_tables_habilidades(cursor):
    criar_tabela_habilidades_query = """
    CREATE TABLE IF NOT EXISTS habilidades (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(50) UNIQUE,
        descricao VARCHAR(500)
    )
    """
    cursor.execute(criar_tabela_habilidades_query)

# def criate_tables_(cursor):

