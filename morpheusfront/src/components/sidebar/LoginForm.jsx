import React, { useContext, useEffect, useState } from "react";
import { GetGravatar } from "../../helpers/Gravatar";
import { LoginRequest, newLogin } from "../../helpers/requests/login";
import MyContext from "../../helpers/context/MyContext";

import "./styles/LoginForm.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contas, setContas] = useState("loading");
  const [disabledButton, setDisabledButton] = useState(true);
  const [DBresponse, setDBresponse] = useState("");
  const { setLoggedIn, setImutables } = useContext(MyContext);

  useEffect(() => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setDisabledButton(!(username && regex.test(email)));
  }, [username, email]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await LoginRequest();
      setContas(response ? response[0] : "back off");
      setImutables({ races: response[2], classe: response[1] });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const enterButton = async (event) => {
    event.preventDefault();
    const answer = await newLogin(username, email);
    setDBresponse(answer);
    if (answer === "Novo usuário cadastrado com sucesso") {
      const data = { name: username, email: email, role: "player" };
      setLoggedIn(data);
    }
  };

  const iconMaker = (conta) => {
    const data = { name: conta[1], email: conta[2], role: conta[3] };

    return (
      <div
        key={conta[2]}
        onClick={() => setLoggedIn(data)}
        className="icon-maker-container"
      >
        <img
          src={GetGravatar(conta[2])}
          alt="Avatar"
          className="icon-maker-avatar"
        />
        <p className="icon-maker-name">{conta[1]}</p>
      </div>
    );
  };

  const renderLoadingMessage = () => (
    <div className="back-loading">
      <p className="back-title">Banco de Dados</p>
      <p className="back-message">Conectando...</p>
    </div>
  );

  const renderBackOffMessage = () => (
    <div className="back-off-alert">
      <p className="back-title">Banco de Dados</p>
      <p className="back-message">Desativado</p>
      <p className="back-contact">Entre em contato para ativar</p>
    </div>
  );

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
      <h6>{DBresponse}</h6>
      <button disabled={disabledButton} onClick={enterButton}>
        Conectar
      </button>
      <div className="profile-icons">
        <p>Contas já cadastradas</p>
        {contas === "loading"
          ? renderLoadingMessage()
          : contas === "back off"
          ? renderBackOffMessage()
          : contas.map((conta) => iconMaker(conta))}
      </div>
      <a href="https://br.gravatar.com/">Cadastre-se aqui para ter um avatar</a>
    </div>
  );
};

export default LoginForm;


