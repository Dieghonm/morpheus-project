import React, { useContext } from 'react';
import MyContext from '../../helpers/context/MyContext'

import'./styles/SavingThrow.css'

const SavingThrow = () => {
  const {characterSheet} = useContext(MyContext)
  const {
    atributos,
    resistencia,
    proficiencia,
  }= characterSheet;

  const renderAttributes = () => {
    
    if (atributos) {
      const array = resistencia.slice(1, -1).split(',').map(item => item.trim());
      return Object.entries(atributos).map(([attribute, value]) => (
        <div key={attribute} className="saving">
          {array.includes(attribute)? <input type="checkbox" className="saving-input" checked /> : <input type="checkbox" disabled className="saving-input" /> }
          <span className="saving-name">{attribute}</span>
          <span className="saving-value">{Math.floor(value / 2) - 5}</span>
          <span className="saving-Mod">{array.includes(attribute)? proficiencia + (Math.floor(value / 2) - 5) : Math.floor(value / 2) - 5 }</span>
        </div>
      ));
    } 
  };

  return (
    <div className="saving-group">
      <h3>Teste de resistência</h3>
      {renderAttributes()}
    </div>
  );
}

export default SavingThrow;