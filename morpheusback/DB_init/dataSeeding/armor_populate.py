def armor_populate(conn, cursor):
    def create_armor(name, preco, classe_armadura, forca, furtividade, peso):
        check_armor_query = "SELECT * FROM armaduras WHERE nome = %s"
        cursor.execute(check_armor_query, (name,))
        armor_exists = cursor.fetchone()

        if armor_exists:
            print("Armor already exists.")
        else:
            insert_armor_query = """
            INSERT INTO armaduras (nome, preco, classe_armadura, forca, furtividade, peso)
            VALUES (%s, %s, %s, %s, %s, %s)
            """
            cursor.execute(insert_armor_query, (name, preco, classe_armadura, forca, furtividade, peso))
            conn.commit()
            print("New armor created successfully.")

    create_armor('Sem armadura', '0 po', '0', '-', '0', '0 Kg');
    create_armor('Acolchoada', '5 po', '11', '-', 'Desvantagem', '4 kg'),
    create_armor('Couro', '10 po', '11', '-', '-', '5 kg'),
    create_armor('Couro Batido', '45 po', '12', '-', '-', '6,5 kg'),
    create_armor('Gibão de Peles', '10 po', '12', '-', '-', '6 kg'),
    create_armor('Camisão de Malha', '50 po', '13', '-', '-', '10 kg'),
    create_armor('Brunea', '50 po', '14', '-', 'Desvantagem', '22,5 kg'),
    create_armor('Peitoral', '400 po', '14', '-', '-', '10 kg'),
    create_armor('Meia-Armadura', '750 po', '15', '-', 'Desvantagem', '20 kg'),
    create_armor('Cota de anéis', '30 po', '14', '-', 'Desvantagem', '20 kg'),
    create_armor('Cota de malha', '75 po', '16', 'For 13', 'Desvantagem', '27,5 kg'),
    create_armor('Cota de talas', '200 po', '17', 'For 15', 'Desvantagem', '30 kg'),
    create_armor('Placas', '1.500 po', '18', 'For 15', 'Desvantagem', '32,5 kg'),
    create_armor('Sem escudo', '0 po', '0', '-', '0', '0 Kg');
    create_armor('Escudo leve', '5 po', '+1', '-', '-1', '3 Kg'),
    create_armor('Escudo pesado', '15 po', '+2', '-', '-2', '7 Kg'),
    create_armor('Escudo de corpo', '50 po', '+4', '-', '-5', '15 Kg');