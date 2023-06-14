import { useContext } from 'react';
import './styles/SidebarButtons.css'
import MyContext from '../helpers/context/MyContext';

const SidebarButtons = () => {
  const {loggedIn} = useContext (MyContext)
  console.log(loggedIn);
  return (
    <div className="SidebarButtons">
      <button className="sidebar-button">Ver ficha</button>
      <button className="sidebar-button">Editar ficha</button>
      <button className="sidebar-button">Botão 4</button>
      <button className="sidebar-button">Botão 5</button>
      <button className="sidebar-button">Botão 6</button>
      <button className="sidebar-button">Combate</button>
    </div>
  );
}

export default SidebarButtons;
