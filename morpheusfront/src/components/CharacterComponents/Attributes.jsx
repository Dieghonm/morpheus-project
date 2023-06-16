import React, { useContext } from 'react';
import MyContext from '../../helpers/context/MyContext'

const Attributes = () => {
  const {characterSheet} = useContext(MyContext)
  const {
    atributos,
  }= characterSheet;

  const renderAttributes = () => {
    if (atributos) {
      return Object.entries(atributos).map(([attribute, value]) => (
        <div key={attribute} className="attribute">
          <span className="attribute-name">{attribute}:</span>
          <span className="attribute-value">{value}</span>
          <span className="attribute-Mod">{value / 2 - 5}</span>
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