import React from 'react';

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
import Photo from './CharacterComponents/Photo';

import './styles/DisplayCharacterSheet.css';

const DisplayCharacterSheet = () => {

  return (
    <div className="display-ficha">
      <h2>Display Ficha</h2>
     
        <Header />
      <div className='mid-container'>
        <Attributes />
        <PV />
        <Photo />
      </div>
      <div className='mid-container'>
        <Skills />
        <div>
          <span className='mid-span'>
            <SavingThrow />
            <CombatData />
          </span>
          <Attacks /> 
        </div>
      </div>
        <Equipment />
        <Spells />
        <Feats />
    </div>
  );
};

export default DisplayCharacterSheet;

