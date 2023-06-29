import React, { useContext } from 'react';
import MyContext from '../helpers/context/MyContext';

import Header from './CharacterComponents/Header';
import Attributes from './CharacterComponents/Attributes';
import PV from './CharacterComponents/PV';
import CombatData from './CharacterComponents/CombatData';
import Skills from './CharacterComponents/Skills';
import Attacks from './CharacterComponents/Attacks';
import SavingThrow from './CharacterComponents/SavingThrow';
import Photo from './CharacterComponents/Photo';
import { EditToken } from '../helpers/requests/token';
import { arrayToString } from '../helpers/functions';

const DisplayCharacterSheet = () => {
  const { characterSheet, loggedIn } = useContext(MyContext);

  const saveCharacter = () => {
    const { email } = loggedIn
    const {skills, ataques} = characterSheet
    const skillsString = arrayToString(skills)
    const ataquesString = JSON.stringify(ataques)
    EditToken({email, ...characterSheet, skills: skillsString, ataques: ataquesString })
  }

  return (
    <div >
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
        <button onClick={saveCharacter}>Salvar </button>
    </div>
  );
};

export default DisplayCharacterSheet;

