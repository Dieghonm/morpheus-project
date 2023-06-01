import React, { useState } from 'react';
import EditCharacterSheet from './components/EditCharacterSheet';
import DisplayCharacterSheet from './components/DisplayCharacterSheet';
import './App.css';

const CharacterSheet = () => {
  const [ficha, setFicha] = useState({
    name: '',
    race: 'human',
    class: '',
    level: 1,
    attributes: {
      Strength: 10,
      Dexterity: 10,
      Constitution: 10,
      Intelligence: 10,
      Wisdom: 10,
      Charisma: 10,
    },
    skills: {
      "Acrobacia": {valor: 0, "atributo": "DES",},
      "Trato com Animais": {valor: 0, "atributo": "SAB",},
      "Arcanismo": {valor: 0, "atributo": "INT",},
      "Atletismo": {valor: 0, "atributo": "FOR",},
      "Enganação": {valor: 0, "atributo": "CAR",},
      "História": {valor: 0, "atributo": "INT",},
      "Intuição": {valor: 0, "atributo": "SAB",},
      "Intimidação": {valor: 0, "atributo": "CAR",},
      "Investigação": {valor: 0, "atributo": "INT",},
      "Medicina": {valor: 0, "atributo": "SAB",},
      "Natureza": {valor: 0, "atributo": "INT",},
      "Percepção": {valor: 0, "atributo": "SAB",},
      "Performance": {valor: 0, "atributo": "CAR",},
      "Persuasão": {valor: 0, "atributo": "CAR",},
      "Religião": {valor: 0, "atributo": "INT",},
      "Prestidigitação": {valor: 0, "atributo": "DES",},
      "Furtividade": {valor: 0, "atributo": "DES",},
      "Sobrevivência": {valor: 0, "atributo": "SAB",}
  },
    equipment: [],
  });

  const handleSave = (updatedFicha) => {
    setFicha(updatedFicha);
  };

  return (
    <div className="App">
      <h1>D&D Character Sheet</h1>
      {/* <EditCharacterSheet ficha={ficha} onSave={handleSave} /> */}
      {/* <DisplayCharacterSheet ficha={ficha} /> */}
    </div>
  );
};

export default CharacterSheet;