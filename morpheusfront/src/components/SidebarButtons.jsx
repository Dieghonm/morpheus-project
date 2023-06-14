import { useContext } from 'react';
import { Link } from 'react-router-dom';

import './styles/SidebarButtons.css'
import MyContext from '../helpers/context/MyContext';

const SidebarButtons = () => {
  const {loggedIn} = useContext (MyContext)
  console.log(loggedIn);
  return (
    <div>
      <div className="SidebarButtons">
        <Link to="/Rules"><button className="sidebar-button">Regras</button></Link>
        <Link to="/Tokens"><button className="sidebar-button">Fichas</button></Link>
        <Link to="/EditToken"><button className="sidebar-button">Editar ficha</button></Link>
        <Link to="/Fight"><button className="sidebar-button">Combate</button></Link>
      </div>
    </div>
  );
}

export default SidebarButtons;
