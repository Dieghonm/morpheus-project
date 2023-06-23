import React, { useContext } from 'react';
import MyContext from '../../helpers/context/MyContext'
import'./styles/CombatData.css'

const CombatData = () => {
  const {characterSheet} = useContext(MyContext)
  const {
    name,
    classe,
    atributos,
    proficiencia,
    movimentacao,
  }= characterSheet;


  if(name) {
    return (
      <div className="combat-group">
        <h4 className="combat-init">Iniciativa: {atributos.Destresa/2 - 5}</h4>
        <h4 className="combat-ca">Classe de armadura:</h4>
        <h4 className="combat-value">{
          classe === 'Barbaro'? (
            10 + (atributos.Destresa / 2 - 5) + (atributos.Constituição / 2 - 5) + ('equip')
            ): (
            10 + (atributos.Destresa / 2 - 5) + ('equip')
          )}</h4>
        <h4 className="combat-desl">Deslocamento: {movimentacao}</h4>
        <h4 className="combat-prof">Proficiência: {proficiencia}</h4>
      </div>
    );
  }
}

export default CombatData;