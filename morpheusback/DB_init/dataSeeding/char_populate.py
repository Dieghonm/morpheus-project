def char_populate(conn, cursor):
    def new_personagem(usuario_id, nome, classe_id, raca_id, resistencia, skills):
        check_personagem_query = "SELECT * FROM personagens WHERE nome = %s"
        cursor.execute(check_personagem_query, (nome,))
        personagem_exists = cursor.fetchone()

        if personagem_exists:
            print("Personagem já existe.")
        else:
            insert_personagem_query = """
            INSERT INTO personagens (id, nome, classe_id, raca_id, resistencia, skills)
            VALUES (%s, %s, %s, %s, %s, %s)
            """
            cursor.execute(insert_personagem_query, (usuario_id, nome, classe_id, raca_id, resistencia, skills))
            conn.commit()
            print("Novo personagem cadastrado com sucesso.")

        
    new_personagem(1, "Tobias", 3, 1, '[Força, Sabedoria]', '[Atuação, Intimidação, Religião]')
    new_personagem(1, "P azul generico", 5, 2, '[Constituição, Carisma]', '[Acrobacia, Percepção, Sobrevivência]')

