import React, { useState } from 'react';

import './styles/EditCharacterSheet.css'

const EditCharacterSheet = ({ ficha, onSave }) => {
  const [name, setName] = useState(ficha.name);
  const [race, setRace] = useState(ficha.race);
  const [classs, setClass] = useState(ficha.class);
  const [level, setLevel] = useState(ficha.level);
  const [attributes, setAttributes] = useState(ficha.attributes);
  const [skills, setSkills] = useState(ficha.skills);
  const [equipment, setEquipment] = useState(ficha.equipment);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedFicha = {
      name,
      race,
      class: classs,
      level,
      attributes,
      skills,
      equipment,
    };
    onSave(updatedFicha);
  };

  const createAttributes = (attributes) => {
    const attributeNames = Object.keys(attributes);
    return attributeNames.map((attribute) => (
      <div key={attribute} className="attribute">
        <label>{attribute}:</label>
        <input
          type="number"
          value={attributes[attribute]}
          onChange={(e) =>
            setAttributes({ ...attributes, [attribute]: e.target.value })
          }
        />
      </div>
    ));
  };

  const createSkills = (skills) => {
    const skillNames = Object.keys(skills);
    return skillNames.map((skill) => (
      <div key={skill} className="skills">
        <label>{skill}:</label>
        <p>Mod: {skills[skill].atributo}</p>
        <input
          type="number"
          value={skills[skill].valor}
          onChange={(e) =>
            setSkills({
              ...skills,
              [skill]: { valor: e.target.value, atributo: skills[skill].atributo },
            })
          }
        />
      </div>
    ));
  };

  const criateRace = () => {
    return (
      <select name="race" id="cars" value={race.choice} onChange={(e) => setRace({choice:e.target.value, })}>
          <option value="human">Human</option>
      </select>
    )
  }

  return (
    <div className="edit-ficha">
      <h2>Edit Ficha</h2>
      <form onSubmit={handleSubmit}>
        <div className="character-group">
          <div className="character-Name">
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="character-race">
            <label>Race:</label>
            {criateRace()}
          </div>
          <div className="character-classs">
            <label>Class:</label>
            <input type="text" value={classs} onChange={(e) => setClass(e.target.value)} />
          </div>
          <div className="character-level">
            <label>Level:</label>
            <input type="number" value={level} onChange={(e) => setLevel(e.target.value)} />
          </div>
        </div>
        <div className="attributes-group">
          <h3>Attributes</h3>
          {createAttributes(attributes)}
        </div>
        <div className="skills-group">
          <h3>Skills</h3>
          {createSkills(skills)}
        </div>
        <div className="equipment-group">
          <label>Equipment:</label>
          <textarea value={equipment} onChange={(e) => setEquipment(e.target.value)}></textarea>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditCharacterSheet;

