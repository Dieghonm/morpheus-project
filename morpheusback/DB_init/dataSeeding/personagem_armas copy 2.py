def put_personagem_armas(conn, cursor, personagem_id, arma_id):
        
    insert_personagem_arma_query = """
    INSERT INTO personagem_armas (personagem_id, arma_id)
    VALUES (%s, %s)
    """
    cursor.execute(insert_personagem_arma_query, (personagem_id, arma_id))
    conn.commit()
    print("New personagem-arma association created successfully.")
