import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles/SidebarButtons.css'
import MyContext from '../helpers/context/MyContext';
import { TokenRequest } from '../helpers/requests/token';
import { useState } from 'react';

const SidebarButtons = () => {
  const {loggedIn, setSelectedToken, setScreen} = useContext(MyContext)
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
    if((Filter && Token[0] !== loggedIn.name) || Token[1] === 'Novo Personagem') {
      return null
    }

    return (
      <Link key={Token[1]} to="/Tokens">
        <button className="sidebar-button" onClick={() => {
          setSelectedToken(Token)
          setScreen('ficha')
        } }>
          {Token[1]}
        </button>
      </Link>
    )
  }

  const newCaracter = () => {
    setScreen('edit')
    setSelectedToken(Tokens[0])
  }

  return (
    <div>
      <div className="SidebarButtons">
        <Link to="/Fight"><button className="sidebar-button">Combate</button></Link>
        <Link to="/Rules"><button className="sidebar-button">Regras</button></Link>
        <p>Personagens</p>
        {console.log(Tokens[0])}
        <Link to="/Tokens"><button className="sidebar-button" onClick={newCaracter}>Criar ficha</button></Link>
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
