def user_populate(conn, cursor):
    def add_user(nome, email, role):
      insert_user_query = """
      INSERT INTO usuarios (nome, email, role)
      VALUES (%s, %s, %s)
      """
      cursor.execute(insert_user_query, (nome, email, role))
      conn.commit()

    check_admin_query = "SELECT * FROM usuarios WHERE email = 'dieghonm@gmail.com'"
    cursor.execute(check_admin_query)
    admin_exists = cursor.fetchone()

    if not admin_exists:
        add_user('Diegho', 'dieghonm@gmail.com', 'admin')
        add_user("Fecine", "fecine@gmail.com", "player")


