import React from 'react';

import './styles/DisplayCharacterSheet.css';

const DisplayCharacterSheet = ({ ficha }) => {
  const { name, race, class: classs, level, attributes, skills, equipment } = ficha;

  const renderAttributes = (attributes) => {
    return Object.entries(attributes).map(([attribute, value]) => (
      <div key={attribute} className="attribute">
        <span className="attribute-name">{attribute}:</span>
        <span className="attribute-value">{value}</span>
      </div>
    ));
  };

  const renderSkills = (skills) => {
    return Object.entries(skills).map(([skill, { value, modifier }]) => (
      <div key={skill} className="skill">
        <span className="skill-name">{skill}:</span>
        <span className="skill-value">{value}</span>
        <span className="skill-modifier">Mod: {modifier}</span>
      </div>
    ));
  };

  return (
    <div className="display-ficha">
      <h2>Display Ficha</h2>
      <div className="character-group">
        <div className="character-info">
          <span className="character-label">Name:</span>
          <span>{name}</span>
        </div>
        <div className="character-info">
          <span className="character-label">Race:</span>
          <span>{race}</span>
        </div>
        <div className="character-info">
          <span className="character-label">Class:</span>
          <span>{classs}</span>
        </div>
        <div className="character-info">
          <span className="character-label">Level:</span>
          <span>{level}</span>
        </div>
      </div>
      <div className="attributes-group">
        <h3>Attributes</h3>
        {renderAttributes(attributes)}
      </div>
      <div className="skills-group">
        <h3>Skills</h3>
        {renderSkills(skills)}
      </div>
      <div className="equipment-group">
        <h3>Equipment</h3>
        <p>{equipment}</p>
      </div>
    </div>
  );
};

export default DisplayCharacterSheet;

