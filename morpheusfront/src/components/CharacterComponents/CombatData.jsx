import React, { useContext } from 'react';
import MyContext from '../../helpers/context/MyContext'
import'./styles/CombatData.css'

const CombatData = () => {
  const {characterSheet} = useContext(MyContext)
  const {
    name,
    raca,
    classe,
    atributos,
    proficiencia,
  }= characterSheet;


  const movement = () => {
    // Anão 7,5
    // Elfo 9 
    // Halfling 7,5
    // Humano: 9
    // Draconato: 9
    // Gnomo 7,5
    // Meio-Elfo: 9
    // Meio-Orc: 9
    // Tiefling: 9
    const small = ["Anão", 'Halfling', 'Gnomo']
    if (small.includes(raca)) {
      return '7.5'
    }
    return '9'
  }

  console.log(classe);
  if(name) {
    return (
      <div className="combat-group">
      <h4>Iniciativa: {atributos.Destresa/2 - 5}</h4>
      <h4>classe de armadura: {
        classe === 'Barbaro'? (
          10 + (atributos.Destresa / 2 - 5) + (atributos.Constituição / 2 - 5) + ('equip')
          ): (
          10 + (atributos.Destresa / 2 - 5) + ('equip')
        )}</h4>
      <h4>deslocamento: {movement()}m</h4>
      <h4>Proficiência: {proficiencia}</h4>
    </div>
    );
  }
}

export default CombatData;