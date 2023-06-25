import React, { useContext } from 'react';
import MyContext from '../../helpers/context/MyContext'

import'./styles/Skills.css'

const Skills = () => {
  const {characterSheet} = useContext(MyContext)
  const {
    name,
    classe,
    atributos,
    skills,
    proficiencia
  }= characterSheet;

  const allskills= [
    [],
    ["Acrobacia",  "Destresa"],
    ["Adestrar Animais",  "Sabedoria"],
    ["Arcanismo",  "Inteligéncia"],
    ["Atletismo",  "Destresa"],
    ["Atuação",  "Carisma"],
    ["Enganação",  "Carisma"],
    ["Furtividade",  "Destresa"],
    ["História",  "Inteligéncia"],
    ["Intuição",  "Sabedoria"],
    ["Intimidação",  "Carisma"],
    ["Investigação",  "Inteligéncia"],
    ["Medicina",  "Sabedoria"],
    ["Natureza",  "Inteligéncia"],
    ["Percepção",  "Sabedoria"],
    ["Persuasão",  "Carisma"],
    ["Prestidigitação",  "Destresa"],
    ["Religião",  "Inteligéncia"],
    ["Sobrevivência",  "Sabedoria"]
  ]

  const renderSkills = () => {
    return allskills.map((skill, i) => {
      if(i) {
        const array = skills.slice(1, -1).split(',').map(item => item.trim());
        return (
          <div key={skill[0]} className="skill">
            {array.includes(skill[0])? <input type="checkbox" className="skill-input" checked /> : <input type="checkbox" disabled className="skill-input" /> }
            <span className="skill-name">{skill[0]}:</span>
            <span className="skill-modifier">{skill[1].slice(0, 3)}: {atributos[skill[1]] / 2 - 5}</span>
            <span className="skill-total">{array.includes(skill[0])? proficiencia + (atributos[skill[1]] / 2 - 5) : atributos[skill[1]] / 2 - 5 }</span>
          </div>
        )
      }
      return (
        <div key='skill 0' className="skill">
          <span className="skill-input"> </span>
          <span className="skill-name">Nome</span>
          <span className="skill-modifier">Mod</span>
          <span className="skill-total">Total</span>
        </div>
      )
    });
  };

  if (classe) {
    return (
      <div className="skills-group">
          <h3>Skills</h3>
          {renderSkills(skills)}
      </div>
    );
  }
}

export default Skills;

