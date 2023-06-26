import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../../helpers/context/MyContext';
import './styles/Skills.css';

const Skills = () => {
  const { characterSheet, setCharacterSheet, screen } = useContext(MyContext);
  const { classe, atributos, skills, proficiencia } = characterSheet;
  const [skillsArray, setSkillsArray] = useState([]);

  useEffect(() => {
    if (skills) {
      setSkillsArray(skills);
    }
  }, [characterSheet]);

  const allSkills = [
    [],
    ["Acrobacia", "Destreza"],
    ["Adestrar Animais", "Sabedoria"],
    ["Arcanismo", "Inteligência"],
    ["Atletismo", "Destreza"],
    ["Atuação", "Carisma"],
    ["Enganação", "Carisma"],
    ["Furtividade", "Destreza"],
    ["História", "Inteligência"],
    ["Intuição", "Sabedoria"],
    ["Intimidação", "Carisma"],
    ["Investigação", "Inteligência"],
    ["Medicina", "Sabedoria"],
    ["Natureza", "Inteligência"],
    ["Percepção", "Sabedoria"],
    ["Persuasão", "Carisma"],
    ["Prestidigitação", "Destreza"],
    ["Religião", "Inteligência"],
    ["Sobrevivência", "Sabedoria"]
  ];

  const skillSelect = (skill) => {
    if(screen === 'edit'){
      if (skillsArray.includes(skill)) {
        setCharacterSheet({
          ...characterSheet,
          skills: skillsArray.filter((item) => item !== skill)
        });
      } else {
        setCharacterSheet({
          ...characterSheet,
          skills: [...skillsArray, skill]
        });
      }
    }
  };

  const renderSkills = () => {
    return allSkills.map((skill, i) => {
      if (i) {
        const isChecked = skillsArray.includes(skill[0]);
        const modifier = Math.floor(atributos[skill[1]] / 2) - 5;
        const total = isChecked ? proficiencia + modifier : modifier;

        return (
          <div key={skill[0]} className="skill" onClick={() => skillSelect(skill[0])}>
            <input
              type="checkbox"
              className="skill-input"
              checked={isChecked}
              disabled={screen !== 'edit' ? !isChecked: false}
            />
            <span className="skill-name">{skill[0]}:</span>
            <span className="skill-modifier">{skill[1].slice(0, 3)}: {modifier}</span>
            <span className="skill-total">{total}</span>
          </div>
        );
      }

      return (
        <div key="skill 0" className="skill">
          <span className="skill-input"> </span>
          <span className="skill-name">Nome</span>
          <span className="skill-modifier">Mod</span>
          <span className="skill-total">Total</span>
        </div>
      );
    });
  };

  if (classe) {
    return (
      <div className="skills-group">
        <h3>Skills</h3>
        {renderSkills()}
      </div>
    );
  }

  return null;
};

export default Skills;

