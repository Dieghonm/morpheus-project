import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import MyContext from '../helpers/context/MyContext';
import { SelectedTokenRequest } from "../helpers/requests/token";
import DisplayCharacterSheet from "../components/DisplayCharacterSheet";
import CharacterButtons from "../components/CharacterButtons";
import Equipment from "../components/CharacterComponents/Equipment";
import Feats from "../components/CharacterComponents/Feats";
import Spells from "../components/CharacterComponents/Spells";
import Notes from "../components/CharacterComponents/Notes";

import './styles/Tokens.css';

const Tokens = () => {
  const { loggedIn, SelectedToken, setCharacterSheet, screen } = useContext(MyContext);
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetchTokens();
  }, [SelectedToken]);

  useEffect(() => {
    if (character.length > 0) {
      const {
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
        dado_vida
      } = character[0];

      if (character[0]) {
        setCharacterSheet({
          player: SelectedToken[0],
          name: SelectedToken[1],
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
          skills: skills.slice(1, -1).split(',').map(item => item.trim()),
          raca: race_name,
          movimentacao,
          resistencias,
          classe: class_name,
          dado: dado_vida,
          proficiencia,
          ataques: ataques ? ataques.slice(1, -1).split(',').map(item => item.trim()) : [],
        });
      }
    }
  }, [character]);

  const fetchTokens = async () => {
    const response = await SelectedTokenRequest(SelectedToken[1]);
    setCharacter(response);
  };

  const screenSwitch = () => {
    switch (screen) {
      case 'equipamentos':
        return <Equipment />;
      case 'habilidades':
        return <Feats />;
      case 'magias':
        return <Spells />;
      case 'anotacoes':
        return <Notes />;
      default: //'ficha' 'edit'
        return <DisplayCharacterSheet />;
    }
  };

  return loggedIn.name === '' ? <Navigate to={'/'} /> : (
    <div>
      <CharacterButtons />
      <div className="display-ficha">
        {screenSwitch()}
      </div>
    </div>
  );
};

export default Tokens;
