import React, { useEffect, useState } from "react";
import { GetGravatar } from "../helpers/Gravatar";

import "./styles/LoginForm.css";
import { LoginRequest, newLogin } from "../helpers/requests/login";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contas, setContas] = useState([]);
  const [disabledButton, setDisabledButton] = useState(true);

  useEffect(() => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (username && regex.test(email)) {
    if (username) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [username, email]);

  const enterButton = (event) => {
    event.preventDefault();
    
    newLogin({ username, email }) //verificar o retorno quando ticer um banco
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

  const init = () => {
    LoginRequest()
  }

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
      <button onClick={(e) => init(e)}>init</button>
    </div>
  );
};

export default LoginForm;
