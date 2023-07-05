import React, { useContext } from 'react';
import MyContext from '../../helpers/context/MyContext'

import'./styles/Attributes.css'

const Attributes = () => {
  const {characterSheet, setCharacterSheet, screen} = useContext(MyContext)
  const {
    atributos,
  }= characterSheet;

  const skillChang = (attribute, value) => {
    const atributos = { ...characterSheet.atributos, [attribute]: value}
    setCharacterSheet({...characterSheet, atributos})
  }

  const renderAttributes = () => {
    if (atributos ) {
      if (screen === 'ficha') {
        return Object.entries(atributos).map(([attribute, value]) => (
          <div key={attribute} className="attribute">
            <span className="attribute-name">{attribute}:</span>
            <span className="attribute-value">{value}</span>
            <span className="attribute-Mod">{Math.floor(value / 2) - 5}</span>
          </div>
        ));
      }
      return Object.entries(atributos).map(([attribute, value]) => (
        <div key={attribute} className="attribute">
          <span className="attribute-name">{attribute}:</span>
          <input className="attribute-input" type="number" onChange={(e) => skillChang(attribute, e.target.value)} value={value}/>
          <span className="attribute-Mod">{Math.floor(value / 2) - 5}</span>
        </div>
      ));
    } 
  };

  return (
    <div className="attributes-group">
      <h3>Atributos</h3>
      {renderAttributes()}
    </div>
  );
}

export default Attributes;