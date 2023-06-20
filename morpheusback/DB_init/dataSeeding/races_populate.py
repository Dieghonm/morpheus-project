def race_populate(conn, cursor):
    def create_race(race_id, name, language, attribute, movement, abilities):
        check_race_query = "SELECT * FROM races WHERE name = %s"
        cursor.execute(check_race_query, (name,))
        race_exists = cursor.fetchone()

        if race_exists:
            print("Race already exists.")
        else:
            insert_race_query = """
            INSERT INTO races (id, name, language, attribute, movement, abilities)
            VALUES (%s, %s, %s, %s, %s, %s)
            """
            cursor.execute(insert_race_query, (race_id, name, language, attribute, movement, abilities))
            conn.commit()
            print("New race created successfully.")


    create_race(1, "Dwarf", "Dwarvish", "Constitution +2", 25, "[Darkvision, Dwarven Resilience]")
    create_race(2, "Elf", "Elvish", "Dexterity +2", 30, "[Darkvision, Fey Ancestry]")
    create_race(3, "Halfling", "Halfling", "Dexterity +2", 25, "[Lucky, Brave]")
    create_race(4, "Human", "Common", "Ability of choice", 30, "[Versatility, Additional Language]")
    create_race(5, "Dragonborn", "Draconic", "Strength +2, Charisma +1", 30, "[Draconic Ancestry, Breath Weapon]")
    create_race(6, "Gnome", "Gnomish", "Intelligence +2", 25, "[Darkvision, Gnome Cunning]")
    create_race(7, "Half-Elf", "Elvish, Common", "Charisma +2, Two other ability scores of choice", 30, "[Darkvision, Fey Ancestry]")
    create_race(8, "Half-Orc", "Orcish, Common", "Strength +2, Constitution +1", 30, "[Darkvision, Menacing]")
    create_race(9, "Tiefling", "Infernal, Common", "Intelligence +1, Charisma +2", 30, "[Darkvision, Hellish Resistance]")

