import React, { useContext } from 'react';
import MyContext from '../../../helpers/context/MyContext';

import './styles/PV.css';

const PV = () => {
  const { characterSheet, setCharacterSheet, screen } = useContext(MyContext);
  const { nivel, pontos_vida, atributos, dado } = characterSheet;

  if (dado) {
    const constitMod = Math.floor(atributos.Constituição / 2) - 5;

    return (
      <div className="PV-group">
        <h3>Pontos de Vida</h3>
        <div className="dado-div">
          <span>Dado de vida:</span>
          <span>{dado}</span>
        </div>
        <div>Nivel x Dado + Const</div>
        <div className="vida-calculo">
          <span>{nivel}</span>
          <span>x</span>
          <span>{dado}</span>
          <span>+</span>
          <span>{constitMod}</span>
        </div>
        <div className="total-pv">
          <span>Total:</span>
          {screen === 'edit' ? (
            <input
              className="pv-input"
              type="number"
              onChange={(e) => setCharacterSheet({ ...characterSheet, pontos_vida: parseInt(e.target.value) })}
              value={pontos_vida}
            />
          ) : (
            <span className="total-value">{pontos_vida}</span>
          )}
        </div>
      </div>
    );
  }

  return null;
};

export default PV;
