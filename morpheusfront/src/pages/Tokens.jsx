import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import MyContext from '../helpers/context/MyContext';
import { SelectedTokenRequest } from "../helpers/requests/token";
import DisplayCharacterSheet from "../components/DisplayCharacterSheet";

const Tokens = () => {
  const {loggedIn, SelectedToken, setCharacterSheet} = useContext(MyContext)
  const [caracter, serCaracter] = useState({})

  useEffect(() => {
    fetchTokens();
  }, [SelectedToken]);
  
  useEffect(() => {
    if(caracter[0]){
      setCharacterSheet({
        player: SelectedToken[0],
        name:SelectedToken[1],
        classe: caracter[0][3],
        nivel: caracter[0][4],
        raca: caracter[0][5],
        pontos_vida : caracter[0][6],
        experiencia: caracter[0][7],
        atributos:{
          Força : caracter[0][8],
          Destresa : caracter[0][9],
          Constituição : caracter[0][10],
          Inteligéncia : caracter[0][11],
          Sabedoria : caracter[0][12],
          Carisma : caracter[0][13],
        },
        dado: caracter[0][14],
        proficiencia: caracter[0][15],
        skills: {
          "Acrobacia": ["Destresa", 'db'],
          "Adestrar Animais": ["Sabedoria", 'db'],
          "Arcanismo": ["Inteligéncia", 'db'],
          "Atletismo": ["Destresa", 'db'],
          "Atuação": ["Carisma", 'db'],
          "Enganação": ["Carisma", 'db'],
          "Furtividade": ["Destresa", 'db'],
          "História": ["Inteligéncia", 'db'],
          "Intuição": ["Sabedoria", 'db'],
          "Intimidação": ["Carisma", 'db'],
          "Investigação": ["Inteligéncia", 'db'],
          "Medicina": ["Sabedoria", 'db'],
          "Natureza": ["Inteligéncia", 'db'],
          "Percepção": ["Sabedoria", 'db'],
          "Persuasão": ["Carisma", 'db'],
          "Prestidigitação": ["Destresa", 'db'],
          "Religião": ["Inteligéncia", 'db'],
          "Sobrevivência": ["Sabedoria", 'db']
        },
        equipments: {},
      });
    }
  },[caracter])
  
  const fetchTokens = async () => {
    const response = await SelectedTokenRequest(SelectedToken[1]);
    serCaracter(response)
  };

  return loggedIn.name === '' ? <Navigate to={'/'} /> : (
    <div>
      <DisplayCharacterSheet />
    </div>
  );
}

export default Tokens;