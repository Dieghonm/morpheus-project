import React from 'react';

import './styles/DisplayCharacterSheet.css';
import Header from './CharacterComponents/Header';
import Attributes from './CharacterComponents/Attributes';
import PV from './CharacterComponents/PV';
import CombatData from './CharacterComponents/CombatData';
import Skills from './CharacterComponents/Skills';
import Equipment from './CharacterComponents/Equipment';
import Attacks from './CharacterComponents/Attacks';
import SavingThrow from './CharacterComponents/SavingThrow';
import Spells from './CharacterComponents/Spells';
import Feats from './CharacterComponents/Feats';

const DisplayCharacterSheet = () => {

  return (
    <div className="display-ficha">
      <h2>Display Ficha</h2>
        <Header />
      <div className='mid-container'>
        <Attributes />
        <PV />
        <CombatData />
      </div>
        <Skills />
        <Attacks />
        <Equipment />
        <SavingThrow />
        <Spells />
        <Feats />
    </div>
  );
};

export default DisplayCharacterSheet;

