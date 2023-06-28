import React, { useContext, useState } from 'react';
import MyContext from '../../helpers/context/MyContext';

import'./styles/Attacks.css'

const Attacks = () => {
  const {characterSheet, setCharacterSheet, screen } = useContext(MyContext);
  const {ataques} = characterSheet;
  const [atack, setAtack] = useState({'Nome' : '', 'Dano': '', 'Tipo': '', 'prop':''});

  const newAttack = (target) => {
    setAtack({...atack, [target.name]: target.value})
  }

  const save = () => {
    if (atack.Nome){
      let array = ataques
      array.push([atack.Nome, atack.Dano, atack.Tipo, atack.prop])
      setCharacterSheet({...characterSheet, ataques: array })
      setAtack({'Nome' : '', 'Dano': '', 'Tipo': '', 'prop':''})
    }
  }

  const renderTitle = () => {
    return (
      <div key="attacks" className="attacks">
        <span className="attacks-name">Nome</span>
        <span className="attacks-dano">Dano</span>
        <span className="attacks-tipo">Tipo</span>
        <span className="attacks-propriedades">Propriedades</span>
      </div>
    )
  }

  const deleteAttack = (i) => {
    const updated = [...ataques];
    updated.splice(i, 1);
    setCharacterSheet({...characterSheet, ataques: updated })
  }

  const renderAtacks = (ataque, i) => {
    return (
      <div key={i} className="attacks">
        <span className="attacks-name">{ataque[0]}</span>
        <span className="attacks-dano">{ataque[1]}</span>
        <span className="attacks-tipo">{ataque[2]}</span>
        <span className="attacks-propriedades">{ataque[3]}</span>
        {screen === 'edit' ? 
          <span className="material-symbols-outlined" onClick={() => deleteAttack(i)}>
            delete
          </span>
        : null}
        
      </div>
    )
  }

  const renderNew = () => {
    if (screen === 'edit') {
      return (
          <div key="attacks-inputs" className="attacks">
            <input className="attack-input-Nome" value={atack.Nome} type="text" name='Nome' placeholder='Nome' onChange={(e) => newAttack(e.target)} />
            <input className="attack-input-Dano" value={atack.Dano} type="text" name='Dano' placeholder='Dano' onChange={(e) => newAttack(e.target)} />
            <input className="attack-input-Tipo" value={atack.Tipo} type="text" name='Tipo' placeholder='Tipo' onChange={(e) => newAttack(e.target)} />
            <input className="attack-input-Propriedades" value={atack.prop} type="text" name='prop' placeholder='Propriedades' onChange={(e) => newAttack(e.target)} />
          <span className="material-symbols-outlined" onClick={save}>
            check_circle
          </span>
        </div>
      )
    }
  }
  
  if (ataques) {
    return (
      <div className='attacks-group'>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <h3>Ataques</h3>
        {renderTitle()}
        {ataques.map((ataque, i) => renderAtacks(ataque, i))}
        {renderNew()}
      </div>
  )};
};

export default Attacks;