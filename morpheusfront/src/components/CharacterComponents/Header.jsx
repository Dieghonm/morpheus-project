import React, { useContext } from 'react';
import MyContext from '../../helpers/context/MyContext'

const Header = () => {
  const {characterSheet} = useContext(MyContext)
  const {
    player,
    name,
    classe,
    nivel,
    raca,
    experiencia,
  }= characterSheet;

  const renderdata = () => {
    if(name) {
      const data = {
        Jogador: player,
        Nome: name,
        Experiencia: experiencia,
        Raça: raca,
        Classe: classe,
        Nivel:nivel,
      }
      return Object.entries(data).map(([item, value]) => (
        <div key={item} className="character-info">
          <span className="character-label">{item}:</span>
          <span className="character-value">{value}</span>
        </div>
      ));
    }
  }
  return (
    <div className="character-group">
      {renderdata()}
    </div>
  );
}

export default Header;