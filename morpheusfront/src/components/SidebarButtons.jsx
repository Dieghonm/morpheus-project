import React from 'react';
import './styles/SidebarButtons.css'

class SidebarButtons extends React.Component {
  render() {
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
}

export default SidebarButtons;
