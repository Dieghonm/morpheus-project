def criate_tables_personagem_armaduras(cursor):
    criar_tabela_personagem_armaduras_query = """
        CREATE TABLE IF NOT EXISTS personagem_armaduras (
            personagem_id INT,
            armadura_id INT,
            FOREIGN KEY (personagem_id) REFERENCES personagens(id),
            FOREIGN KEY (armadura_id) REFERENCES armaduras(id)
        )
        """
    cursor.execute(criar_tabela_personagem_armaduras_query)

def criate_tables_personagem_armas(cursor):
    criar_tabela_personagem_armas_query = """
    CREATE TABLE IF NOT EXISTS personagem_armas (
        personagem_id INT,
        arma_id INT,
        FOREIGN KEY (personagem_id) REFERENCES personagens(id),
        FOREIGN KEY (arma_id) REFERENCES armas(id)
    )
    """
    cursor.execute(criar_tabela_personagem_armas_query)


def criate_tables_personagem_habilidades(cursor):
    criar_tabela_personagem_habilidades_query = """
    CREATE TABLE IF NOT EXISTS personagem_habilidades (
        personagem_id INT,
        habilidade_id INT,
        FOREIGN KEY (personagem_id) REFERENCES personagens(id),
        FOREIGN KEY (habilidade_id) REFERENCES habilidades(id)
    )
    """
    cursor.execute(criar_tabela_personagem_habilidades_query)

