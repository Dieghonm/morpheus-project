def populate_table_personagem_armas(conn, cursor):
    def create_personagem_arma(personagem_id, arma_id):
        check_personagem_arma_query = "SELECT * FROM personagem_armas WHERE personagem_id = %s AND arma_id = %s"
        cursor.execute(check_personagem_arma_query, (personagem_id, arma_id))
        personagem_arma_exists = cursor.fetchone()

        if personagem_arma_exists:
            print("Personagem-arma association already exists.")
        else:
            insert_personagem_arma_query = """
            INSERT INTO personagem_armas (personagem_id, arma_id)
            VALUES (%s, %s)
            """
            cursor.execute(insert_personagem_arma_query, (personagem_id, arma_id))
            conn.commit()
            print("New personagem-arma association created successfully.")

    create_personagem_arma(1, 1)  # Exemplo: Personagem de ID 1 associado à arma de ID 1
    create_personagem_arma(1, 2)  # Exemplo: Personagem de ID 1 associado à arma de ID 2
    create_personagem_arma(2, 3)  # Exemplo: Personagem de ID 2 associado à arma de ID 3
    create_personagem_arma(3, 1)  # Exemplo: Personagem de ID 3 associado à arma de ID 1
