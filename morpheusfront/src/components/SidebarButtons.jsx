import { useContext, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';

import './styles/SidebarButtons.css'
import MyContext from '../helpers/context/MyContext';
import { TokenRequest } from '../helpers/requests/token';
import { useState } from 'react';

const SidebarButtons = () => {
  const {loggedIn, setSelectedToken} = useContext(MyContext)
  const [Tokens, setTokens] = useState([]);
  const [Filter, setFilter] = useState(false);

  useEffect (() => {
    fetchTokens();
  }, []);

  const fetchTokens = async () => {
    const response = await TokenRequest();
    setTokens(response);
  };

  const criateTokenLink = (Token) => {
    if(Filter && Token[0] !== loggedIn.name) {
      return null
    }

    return (
      <Link key={Token[1]} to="/Tokens">
        <button className="sidebar-button" onClick={() => setSelectedToken(Token) }>
          {Token[1]}
        </button>
      </Link>
    )
  }

  return (
    <div>
      <div className="SidebarButtons">
        <Link to="/Fight"><button className="sidebar-button">Combate</button></Link>
        <Link to="/Rules"><button className="sidebar-button">Regras</button></Link>
        <p>Personagens</p>
        <Link to="/EditToken"><button className="sidebar-button">Criar ficha</button></Link>
        <div>
          <input selected onClick={() => setFilter(!Filter)} id="switch-shadow" type="checkbox" />
          <label htmlFor="switch-shadow">Filtrar personagens</label>
        </div>
        {Tokens.map((Token) => criateTokenLink(Token))}
      </div>
    </div>
  );
}

export default SidebarButtons;
