import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { selectedTokenRequest } from "../helpers/requests/token";
import { stringToArray } from "../helpers/functions";
import MyContext from '../helpers/context/MyContext';


import './styles/Tokens.css';
import DisplayCharacterSheet from "../components/TokensComponents/DisplayCharacterSheet";

const Tokens = () => {
  const { loggedIn, selectedToken, setCharacterSheet, screen } = useContext(MyContext);
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetchTokens();
  }, [selectedToken]);

  useEffect(() => {
    if (character.length > 0) {
      const {
        id,
        class_name,
        race_name,
        ataques,
        resistencias,
        skills,
        proficiencia,
        nivel,
        ca,
        pontos_vida,
        movimentacao,
        inteligencia,
        forca,
        experiencia,
        destreza,
        sabedoria,
        carisma,
        constituicao,
        dado_vida,
        armadura,
        escudo,
        img,
      } = character[0];

      if (character[0]) {
        setCharacterSheet({
          id,
          player: selectedToken[0],
          name: selectedToken[1],
          nivel,
          experiencia,
          pontos_vida,
          atributos: {
            Força: forca,
            Destreza: destreza,
            Constituição: constituicao,
            Inteligência: inteligencia,
            Sabedoria: sabedoria,
            Carisma: carisma,
          },
          ca,
          skills: stringToArray(skills),
          raca: race_name,
          movimentacao,
          resistencias,
          classe: class_name,
          dado: dado_vida,
          proficiencia,
          ataques: ataques ? JSON.parse(ataques) : [],
          armadura,
          escudo,
          municao: [],
          arremesso: [],
          equipamentos: [],
          tesouros: [],
          img: null,
        });
      }
    }
  }, [character]);

  const fetchTokens = async () => {
    const response = await selectedTokenRequest(selectedToken[1]);
    setCharacter(response);
  };

  const screenSwitch = () => {
    switch (screen) {
      // case 'equipamentos':
      //   return <Equipment />;
      // case 'habilidades':
      //   return <Feats />;
      // case 'magias':
      //   return <Spells />;
      // case 'anotacoes':
      //   return <Notes />;
      default: //'ficha' 'edit'
        return <DisplayCharacterSheet />;
    }
  };

  return loggedIn.name === '' ? <Navigate to={'/'} /> : (
    <div>
      <div className="display-ficha">
        {screenSwitch()}
      </div>
    </div>
  );
};

export default Tokens;
