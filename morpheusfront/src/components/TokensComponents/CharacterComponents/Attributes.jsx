import React, { useContext } from 'react';
import MyContext from '../../../helpers/context/MyContext';

import './styles/Attributes.css';

const Attributes = () => {
  const { characterSheet, setCharacterSheet, screen } = useContext(MyContext);
  const { atributos } = characterSheet;

  const skillChange = (attribute, value) => {
    const updatedAtributos = { ...characterSheet.atributos, [attribute]: value };
    setCharacterSheet({ ...characterSheet, atributos: updatedAtributos });
  };

  const renderAttributes = () => {
    if (atributos) {
      return Object.entries(atributos).map(([attribute, value]) => {
        const attributeMod = Math.floor(value / 2) - 5;

        if (screen === 'ficha') {
          return (
            <div key={attribute} className="attribute">
              <span className="attribute-name">{attribute}:</span>
              <span className="attribute-value">{value}</span>
              <span className="attribute-Mod">{attributeMod}</span>
            </div>
          );
        } else {
          return (
            <div key={attribute} className="attribute">
              <span className="attribute-name">{attribute}:</span>
              <input className="attribute-input" type="number" onChange={(e) => skillChange(attribute, e.target.value)} value={value} />
              <span className="attribute-Mod">{attributeMod}</span>
            </div>
          );
        }
      });
    }
  };

  return (
    <div className="attributes-group">
      <h3>Atributos</h3>
      {renderAttributes()}
    </div>
  );
};

export default Attributes;
