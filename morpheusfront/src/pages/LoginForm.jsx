import React, { useEffect, useState } from "react";
import { GetGravatar } from "../helpers/Gravatar";
import axios from "axios";
import "./styles/LoginForm.css";

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contas, setContas] = useState([]);
  const [disabledButton, setDisabledButton] = useState(true);

  useEffect(() => {
    const regex = /^[\w-.]+@([\w-])+$/;
    if (username && regex.test(email)) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [username, email]);

  const enterButton = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        email,
      });
      handleLogin(response.data.user, response.data.email);
    } catch (error) {
      console.error("Erro ao efetuar login:", error);
      // Faça o tratamento necessário para exibir uma mensagem de erro ao usuário
    }
  };

  const iconMaker = (conta) => {
    return (
      <div key={conta} 
      // onClick={() => iniciar(conta, contas[conta].Email)}
      >
        <img src={GetGravatar(contas[conta].Email)} alt="Avatar" />
        <p>{conta}</p>
      </div>
    );
  };

  return (
    <div className="LoginForm">
      <h3>Criar nova conta</h3>
      <input
        type="text"
        name="Name"
        placeholder="Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        name="Email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button disabled={disabledButton} onClick={(e) => enterButton(e)}>
        Conectar
      </button>
      <a href="https://br.gravatar.com/">
        Cadastre-se aqui para ter um avatar
      </a>
      <div className="profile-icons">
        {contas.map((conta) => iconMaker(conta))}
      </div>
    </div>
  );
};

export default LoginForm;
