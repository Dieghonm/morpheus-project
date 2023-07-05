import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../../helpers/context/MyContext';
import { TokenRequest } from '../../helpers/requests/token';

import './styles/SidebarButtons.css'
import { GetGravatar } from '../../helpers/Gravatar';

const SidebarButtons = () => {
  const { loggedIn, setSelectedToken, setScreen, tokens, setTokens, isSidebarOpen, setIsSidebarOpen } = useContext(MyContext);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    fetchTokens();
  }, []);

  const fetchTokens = async () => {
    const response = await TokenRequest();
    setTokens(response);
  };

  const media = () => {
    if (window.innerWidth < 750) {
      setIsSidebarOpen(!isSidebarOpen)
    }
  }

  const createTokenLink = (token) => {
    if ((filter && token[0] !== loggedIn.name) || token[1] === 'Novo Personagem') {
      return null;
    }

    return (
      <Link key={token[1]} to="/Tokens">
        <button className="sidebar-button" onClick={() => {
          setSelectedToken(token);
          setScreen('ficha');
          media()
        }}>
          {token[1]}
        </button>
      </Link>
    );
  };

  const newCharacter = () => {
    setScreen('edit');
    setSelectedToken(tokens[0]);
  };


  const avatar = () => {
    return (
      <div className='avatar-div' key={loggedIn.name}>
        <img
          src={GetGravatar(loggedIn.email)}
          alt="Avatar"
          className="icon-avatar"
        />
        <p className="icon-name">{loggedIn.name}</p>
      </div>
    );
  }

  return (
    <div className="SidebarButtons">
      {avatar()}
      <Link to="/Fight">
        <button onClick={() => media()} className="sidebar-button">Combate</button>
      </Link>
      <Link to="/Rules">
        <button onClick={() => media()} className="sidebar-button">Regras</button>
      </Link>

      <p className='personagens'>Personagens</p>
      <Link onClick={() => media()} to="/Tokens">
        <button className="sidebar-button" onClick={newCharacter}>Criar ficha</button>
      </Link>
      <div>
        <input selected={filter} onClick={() => setFilter(!filter)} id="switch-shadow" type="checkbox" />
        <label htmlFor="switch-shadow">Filtrar personagens</label>
      </div>
      {tokens.map((token) => createTokenLink(token))}
    </div>
  );
};

export default SidebarButtons;

