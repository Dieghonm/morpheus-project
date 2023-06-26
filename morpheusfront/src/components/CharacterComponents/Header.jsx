import React, { useContext } from 'react';
import MyContext from '../../helpers/context/MyContext'

import './styles/Header.css'

const Header = () => {
  const {characterSheet, setCharacterSheet, screen, imutables} = useContext(MyContext)
  const {
    player,
    name,
    classe,
    nivel,
    raca,
    experiencia,
  }= characterSheet;

  const renderdata = () => {
    if(classe) {
      const data = {
        Jogador: player,
        Nome: name,
        Experiencia: experiencia,
        Raça: raca,
        Classe: classe,
        Nivel:nivel,
      }

      const handleChang = (item, value) => {
        setCharacterSheet({...characterSheet, [item]: value})
      }

      if (screen === 'ficha') {
        return Object.entries(data).map(([item, value]) => (
          <div key={item} className="character-info">
            <span className="character-label">{item}:</span>
            <span className="character-value">{value}</span>
          </div>
        ));
      }

      return Object.entries(data).map(([item, value]) => {
        if (item === 'Nivel') {
          return (
            <div key={item + 'edit'} className="character-info">
              <span className="character-label">{item}:</span>
              <input className="nivel-input" type="number" onChange={(e) => handleChang('nivel', e.target.value)} value={value}/>
            </div>
          )
        }
        if(item === 'Experiencia') {
          return (
            <div key={item + 'edit'} className="character-info">
              <span className="character-label">{item}:</span>
              <input onChange={(e)=> handleChang("experiencia", e.target.value)} type="number" className="experiencia-input" value={value} />
            </div>
          )
        }
        if(item === 'Raça'){
          return (
            <div key={item + 'edit'} className="character-info">
              <span className="character-label">{item}:</span>
              <select name="racas" value={raca} className="raca-select" onChange={(e) => handleChang('raca', e.target.value)}>
                {imutables.raca.map((item) => <option value={item}>{item}</option>)}
              </select>
            </div>
        )}
        if(item === 'Classe'){
          return (
            <div key={item + 'edit'} className="character-info">
              <span className="character-label">{item}:</span>
              <select name="racas" value={classe} className="classe-select" onChange={(e) => handleChang('classe', e.target.value)}>
                {imutables.classe.map((item) => <option value={item}>{item}</option>)}
              </select>
            </div>
        )}
        if(item === 'Jogador'){
          return (
            <div key={item + 'edit'} className="character-info">
            <span className="character-label">{item}:</span>
            <span className="character-value">{value}</span>
          </div>
          )
        }
        if(item === 'Nome'){
          return (
            <div key={item + 'edit'} className="character-info">
              <span className="character-label">{item}:</span>
              <input type="text" className="edit-character-value" onChange={(e) => handleChang('name', e.target.value)} value={value} />
            </div>
          )
        }
      });
    }
  }
  
  return <div className="character-group">{renderdata()}</div>;

}

export default Header;