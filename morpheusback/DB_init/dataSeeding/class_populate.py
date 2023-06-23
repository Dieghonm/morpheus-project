def class_populate(conn, cursor ):
    def create_class(class_id, name, hit_dice, abilities):
        check_class_query = "SELECT * FROM classes WHERE nome = %s"
        cursor.execute(check_class_query, (name,))
        class_exists = cursor.fetchone()

        if class_exists:
            print("Class already exists.")
        else:
            insert_class_query = """
            INSERT INTO classes (id, nome, dado_vida, habilidades)
            VALUES (%s, %s, %s, %s)
            """
            cursor.execute(insert_class_query, (class_id, name, hit_dice, abilities))
            conn.commit()
            print("New class created successfully.")


    create_class(1, "Bárbaro", "1d12", "[Fúria, Defesa sem Armadura]")
    create_class(2, "Bardo", "1d8", "[Conjurador, Inspiração de Bardo]")
    create_class(3, "Clérigo", "1d8", "[Conjurador, Domínio Divino]")
    create_class(4, "Druida", "1d8", "[Conjurador, Transformação Selvagem]")
    create_class(5, "Guerreiro", "1d10", "[Estilo de Combate, Segunda Respiração]")
    create_class(6, "Monge", "1d8", "[Defesa sem Armadura, Artes Marciais]")
    create_class(7, "Paladino", "1d10", "[Golpe Divino, Imposição das Mãos]")
    create_class(8, "Patrulheiro", "1d10", "[Inimigo Favorecido, Explorador Natural]")
    create_class(9, "Ladino", "1d8", "[Especialização, Ataque Furtivo]")
    create_class(10, "Feiticeiro", "1d6", "[Conjurador, Origem Feiticeira]")
    create_class(11, "Bruxo", "1d8", "[Patrono Outroplano, Magia de Pacto]")
    create_class(12, "Mago", "1d6", "[Conjurador, Recuperação Arcana]")


