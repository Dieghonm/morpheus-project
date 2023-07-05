import React, { useContext } from 'react';
import MyContext from '../../helpers/context/MyContext';
import { EditToken } from '../../helpers/requests/token';
import { arrayToString } from '../../helpers/functions';
import Header from './CharacterComponents/Header';
import Attributes from './CharacterComponents/Attributes';
import PV from './CharacterComponents/PV';
import Photo from './CharacterComponents/Photo';


const DisplayCharacterSheet = () => {
  const { characterSheet, setCharacterSheet, loggedIn, screen, setScreen, setTokens, tokens } = useContext(MyContext);
  const {skills, ataques, name, player} = characterSheet
  const { email } = loggedIn

  const updateStates = (data) => {
    setCharacterSheet({...characterSheet, id: data.id})
    console.log(characterSheet);
    console.log(tokens);
    setTokens([...tokens, [player, name]])
  }

  const saveCharacter = async () => {
    const skillsString = arrayToString(skills)
    const ataquesString = JSON.stringify(ataques)
    if(characterSheet.id === 1) {
      updateStates(await EditToken({email, ...characterSheet, skills: skillsString, ataques: ataquesString }));
    }else {
      EditToken({email, ...characterSheet, skills: skillsString, ataques: ataquesString })
    }
    setScreen('ficha')
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
        {/* <Skills /> */}
        <div>
          <span className='mid-span'>
            {/* <SavingThrow /> */}
            {/* <CombatData /> */}
          </span>
          {/* <Attacks />  */}
        </div>
      </div>
      {screen === 'edit'? 
      name !== 'Novo Personagem' ? <button onClick={saveCharacter}>Salvar</button> : <button disabled onClick={saveCharacter}>Salvar</button>: null
      }
      
    </div>
  );
};

export default DisplayCharacterSheet;

