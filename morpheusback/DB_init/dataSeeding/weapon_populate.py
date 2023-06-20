def weapon_populate(conn, cursor):
    def create_weapon(name, preco, dano, peso, propriedades=''):
        check_race_query = "SELECT * FROM armas WHERE nome = %s"
        cursor.execute(check_race_query, (name,))
        race_exists = cursor.fetchone()

        if race_exists:
            print("Weapon already exists.")
        else:
            insert_race_query = """
            INSERT INTO armas (nome, preco, dano, peso, propriedades)
            VALUES (%s, %s, %s, %s, %s)
            """
            cursor.execute(insert_race_query, (name, preco, dano, peso, propriedades))
            conn.commit()
            print("New wepon created successfully.")


    create_weapon('Adaga', '2 po', '1d4 perfurante', '0,5 kg', 'Acuidade, leve, arremesso (distância 6/18)'),
    create_weapon('Azagaia', '5 pp', '1d6 perfurante', '1 kg', 'Arremesso (distância 9/36)'),
    create_weapon('Bordão', '2 pp', '1d6 concussão', '2 kg', 'Versátil (1d8)'),
    create_weapon('Clava Grande', '2 pp', '1d8 concussão', '5 kg', 'Pesada, duas mãos'),
    create_weapon('Foice Curta', '1 po', '1d4 cortante', '1 kg', 'Leve'),
    create_weapon('Lança', '1 po', '1d6 perfurante', '1,5 kg', 'Arremesso (distância 6/18), versátil (1d8)'),
    create_weapon('Maça', '5 po', '1d6 concussão', '2 kg', '-'),
    create_weapon('Machadinha', '5 po', '1d6 cortante', '1 kg', 'Leve, arremesso (distância 6/18)'),
    create_weapon('Martelo Leve', '2 po', '1d4 concussão', '1 kg', 'Leve, arremesso (distância 6/18)'),
    create_weapon('Porrete', '1 pp', '1d4 concussão', '1 kg', 'Leve'),

    create_weapon('Arco Curto', '25 po', '1d6 perfurante', '1 kg', 'Munição (distância 24/96), duas mãos'),
    create_weapon('Beste Leve', '25 po', '1d8 perfurante', '2,5 kg', 'Munição (distância 24/96), recarga, duas mãos'),
    create_weapon('Dardo', '5 pc', '1d4 perfurante', '0,1 kg', 'Acuidade, arremesso (distância 6/18)'),
    create_weapon('Funda', '1 pp', '1d4 concussão', '-', 'Munição (distância 9/36)'),

    create_weapon('Alabarda', '20 po', '1d10 cortante', '3 kg', 'Pesada, alcance, duas mãos'),
    create_weapon('Cimitarra', '25 po', '1d6 cortante', '1,5 kg', 'Acuidade, leve'),
    create_weapon('Chicote', '2 po', '1d4 cortante', '1,5 kg', 'Acuidade, alcance'),
    create_weapon('Espada Curta', '10 po', '1d6 perfurante', '1 kg', 'Acuidade, leve'),
    create_weapon('Espada Grande', '50 po', '2d6 cortante', '3 kg', 'Pesada, duas mãos'),

    create_weapon('Arco Longo', '50 po', '1d8 perfurante', '1 kg', 'Munição (distância 45/180), pesada, duas mãos'),
    create_weapon('Besta de Mão', '75 po', '1d6 perfurante', '1,5 kg', 'Munição (distância 9/36), leve, recarga'),
    create_weapon('Besta Pesada', '50 po', '1d10 perfurante', '4,5 kg', 'Munição (distância 30/120), pesada, recarga, duas mãos'),
    create_weapon('Rede', '1 po', '0', '1,5 kg', 'Especial, arremesso (distância 1,5/4,5)'),
    create_weapon('Zarabatana', '10 po', '1 perfurante', '0,5 kg', 'Munição (distância 7,5/30), recarga');
