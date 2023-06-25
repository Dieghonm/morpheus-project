import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import MyContext from '../helpers/context/MyContext';
import { SelectedTokenRequest } from "../helpers/requests/token";
import DisplayCharacterSheet from "../components/DisplayCharacterSheet";
import CharacterButtons from "../components/CharacterButtons";

const Tokens = () => {
  const {loggedIn, SelectedToken, setCharacterSheet, screen} = useContext(MyContext)
  const [caracter, setCaracter] = useState({})

  // console.log(SelectedToken);

  useEffect(() => {
    fetchTokens();
  }, [SelectedToken]);
  
  useEffect(() => {
    if(caracter[0]){
      setCharacterSheet({
        player: SelectedToken[0],
        name:SelectedToken[1],
        nivel: caracter[0][5],
        pontos_vida : caracter[0][15],
        experiencia: caracter[0][7],
        atributos:{
          Força : caracter[0][8],
          Destresa : caracter[0][9],
          Constituição : caracter[0][10],
          Inteligéncia : caracter[0][11],
          Sabedoria : caracter[0][12],
          Carisma : caracter[0][13],
        },
        raca: caracter[0][17],
        skills: caracter[0][14],
        movimentacao: caracter[0][20],
        resistencia: caracter[0][25],
    idioma: caracter[0][19],
    BonusAtributo: caracter[0][20],
    habilidadeRacial: caracter[0][21],
        classe: caracter[0][23],
        dado: caracter[0][24],
    habilidadeClasse: caracter[0][26],
        proficiencia: 2,
    equipments: {},
      });
    }
  },[caracter])
  
  const fetchTokens = async () => {
    const response = await SelectedTokenRequest(SelectedToken[1]);
    setCaracter(response)
  };

  return loggedIn.name === '' ? <Navigate to={'/'} /> : (
    <div>
      <CharacterButtons />
      {/* {console.log(screen)} */}
      {screen === 'ficha' || screen === 'edit'? <DisplayCharacterSheet />: null}

      {/* magia, habilidades, equipamento, anotaçoes */}
      
    </div>
  );
}

export default Tokens;