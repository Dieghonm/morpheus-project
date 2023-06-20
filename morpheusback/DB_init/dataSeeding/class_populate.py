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


    create_class(1, "Barbarian", "1d12", "[Rage, Unarmored Defense]")
    create_class(2, "Bard", "1d8", "[Spellcasting, Bardic Inspiration]")
    create_class(3, "Cleric", "1d8", "[Spellcasting, Divine Domain]")
    create_class(4, "Druid", "1d8", "[Spellcasting, Wild Shape]")
    create_class(5, "Fighter", "1d10", "[Fighting Style, Second Wind]")
    create_class(6, "Monk", "1d8", "[Unarmored Defense, Martial Arts]")
    create_class(7, "Paladin", "1d10", "[Divine Smite, Lay on Hands]")
    create_class(8, "Ranger", "1d10", "[Favored Enemy, Natural Explorer]")
    create_class(9, "Rogue", "1d8", "[Expertise, Sneak Attack]")
    create_class(10, "Sorcerer", "1d6", "[Spellcasting, Sorcerous Origin]")
    create_class(11, "Warlock", "1d8", "[Otherworldly Patron, Pact Magic]")
    create_class(12, "Wizard", "1d6", "[Spellcasting, Arcane Recovery]")

