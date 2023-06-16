import React, { useContext } from 'react';
import MyContext from '../../helpers/context/MyContext'

const PV = () => {
  const {characterSheet} = useContext(MyContext)
  const {
    nivel,
    pontos_vida,
    atributos,
    dado,
  }= characterSheet;

  if(pontos_vida) {
    return (
      <div className="PV-group">
        <h3>Pontos de Vida</h3>
        <div className='dado-div'>
          <span >Dado de vida:</span>
          <span >{dado}</span>
        </div>
        <div>Nivel x Dado + Const</div>
        <div className="vida-calculo">
          <span>{nivel}</span>
          <span>x</span>
          <span>{dado}</span>
          <span>+</span>
          <span>{atributos.Constituição / 2 - 5}</span>
        </div>
        <div className="total-pv">
          <span >Total:</span>
          <span className="total-value">{pontos_vida}</span>
        </div>
      </div>
    )
  }
}

export default PV;