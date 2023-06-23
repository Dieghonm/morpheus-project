def class_populate(conn, cursor):
    def create_class(class_id, name, hit_dice, abilities, resistances):
        check_class_query = "SELECT * FROM classes WHERE nome = %s"
        cursor.execute(check_class_query, (name,))
        class_exists = cursor.fetchone()

        if class_exists:
            print("Class already exists.")
        else:
            insert_class_query = """
            INSERT INTO classes (id, nome, dado_vida, habilidades, resistencias)
            VALUES (%s, %s, %s, %s, %s)
            """
            cursor.execute(insert_class_query, (class_id, name, hit_dice, abilities, resistances))
            conn.commit()
            print("New class created successfully.")

    create_class(1, "Bárbaro", "1d12", "[Fúria, Defesa sem Armadura]", "[Força, Constituição]")
    create_class(2, "Bardo", "1d8", "[Conjurador, Inspiração de Bardo]", "[Destreza, Carisma]")
    create_class(3, "Clérigo", "1d8", "[Conjurador, Domínio Divino]", "[Sabedoria, Carisma]")
    create_class(4, "Druida", "1d8", "[Conjurador, Transformação Selvagem]", "[Inteligência, Sabedoria]")
    create_class(5, "Guerreiro", "1d10", "[Estilo de Combate, Segunda Respiração]", "[Força, Constituição]")
    create_class(6, "Monge", "1d8", "[Defesa sem Armadura, Artes Marciais]", "[Força, Destreza]")
    create_class(7, "Paladino", "1d10", "[Golpe Divino, Imposição das Mãos]", "[Sabedoria, Carisma]")
    create_class(8, "Patrulheiro", "1d10", "[Inimigo Favorecido, Explorador Natural]", "[Destreza, Sabedoria]")
    create_class(9, "Ladino", "1d8", "[Especialização, Ataque Furtivo]", "[Destreza, Inteligência]")
    create_class(10, "Feiticeiro", "1d6", "[Conjurador, Origem Feiticeira]", "[Constituição, Carisma]")
    create_class(11, "Bruxo", "1d8", "[Patrono Outroplano, Magia de Pacto]", "[Sabedoria, Carisma]")
    create_class(12, "Mago", "1d6", "[Conjurador, Recuperação Arcana]", "[Inteligência, Sabedoria]")




