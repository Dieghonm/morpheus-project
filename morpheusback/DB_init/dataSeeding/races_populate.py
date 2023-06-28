def races_populate(conn, cursor):
    def create_race(race_id, race_name, language, attribute, movement, habilidades_raciais):
        check_race_query = "SELECT * FROM racas WHERE race_name = %s"
        cursor.execute(check_race_query, (race_name,))
        race_exists = cursor.fetchone()

        if race_exists:
            print("Race already exists.")
        else:
            insert_race_query = """
            INSERT INTO racas (id, race_name, idioma, atributo, movimentacao, habilidades_raciais)
            VALUES (%s, %s, %s, %s, %s, %s)
            """
            cursor.execute(insert_race_query, (race_id, race_name, language, attribute, movement, habilidades_raciais))
            conn.commit()
            print("New race created successfully.")


    create_race(1, "Anão", "Anão", "Constituição +2", '7,5m', "[Visão no Escuro, Resistência Anã]")
    create_race(2, "Elfo", "Élfico", "Destreza +2", '9m', "[Visão no Escuro, Parentesco Élfico]")
    create_race(3, "Halfling", "Halfling", "Destreza +2", '7,5m', "[Sortudo, Destemido]")
    create_race(4, "Humano", "Comum", "Atributo de Escolha", '9m', "[Versatilidade, Idioma Adicional]")
    create_race(5, "Dragonborn", "Draconato", "Força +2, Carisma +1", '9m', "[Linhagem Dracônica, Sopro]")
    create_race(6, "Gnomo", "Gnômico", "Inteligência +2", '7,5m', "[Visão no Escuro, Astúcia Gnômica]")
    create_race(7, "Meio-Elfo", "Élfico, Comum", "Carisma +2, Dois outros atributos de escolha", '9m', "[Visão no Escuro, Parentesco Élfico]")
    create_race(8, "Meio-Orc", "Orc, Comum", "Força +2, Constituição +1", '9m', "[Visão no Escuro, Ameaçador]")
    create_race(9, "Tiefling", "Infernal, Comum", "Inteligência +1, Carisma +2", '9m', "[Visão no Escuro, Resistência Infernal]")

