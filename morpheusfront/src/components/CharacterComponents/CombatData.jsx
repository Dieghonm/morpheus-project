import React, { useContext } from 'react';
import MyContext from '../../helpers/context/MyContext'
import'./styles/CombatData.css'

const CombatData = () => {
  const { characterSheet, setCharacterSheet, screen } = useContext(MyContext);
  const {
    classe,
    atributos,
    proficiencia,
    movimentacao,
    ca,
  }= characterSheet;


  const handlechange = ({name, value}) => {
    setCharacterSheet({...characterSheet, [name]: value})
  }


  if(classe) {
    if (screen === 'edit') {
      return (
        <div className="combat-group">
        <h4 className="combat-ca-edit">Classe de armadura:</h4>
        <h4 className="combat-init">Iniciativa: {atributos.Destreza/2 - 5}</h4>
        <h4 className="combat-value">
          <input className="combat-ca-input" onChange={(e) => handlechange(e.target)} type="number" value={ca} name="ca"/>
        </h4>
        <h4 className="combat-desl">Deslocamento: {movimentacao}</h4> 
        <h4 className="combat-prof">Proficiência: <input onChange={(e) => handlechange(e.target)} className="combat-prof-input" type="number" value={proficiencia} name="proficiencia"/></h4>
      </div>
      )
    }

    return (
      <div className="combat-group">
        <h4 className="combat-init">Iniciativa: {atributos.Destreza/2 - 5}</h4>
        <h4 className="combat-ca">Classe de armadura:</h4>
        <h4 className="combat-value">{ca}</h4>
        <h4 className="combat-desl">Deslocamento: {movimentacao}</h4>
        <h4 className="combat-prof">Proficiência: {proficiencia}</h4>
      </div>
    );
  }
}

export default CombatData;