import React, { useContext } from 'react';
import MyContext from '../../helpers/context/MyContext'

const Skills = () => {

  //   const renderSkills = (skills) => {
//     return Object.entries(skills).map(([skill, { value, modifier }]) => (
//       <div key={skill} className="skill">
//         <span className="skill-name">{skill}:</span>
//         <span className="skill-value">{value}</span>
//         <span className="skill-modifier">Mod: {modifier}</span>
//       </div>
//     ));
//   };
  
  return (
    <div className="skills-group">
        <h3>Skills</h3>
        {/* {renderSkills(skills)} */}
    </div>
  );
}

export default Skills;