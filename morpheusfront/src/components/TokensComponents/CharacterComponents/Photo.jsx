import React, { useContext } from 'react';
import MyContext from '../../../helpers/context/MyContext';

import './styles/Photo.css';

const Photo = () => {
  const { characterSheet, setCharacterSheet } = useContext(MyContext);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setCharacterSheet({...characterSheet, img:file});
  };

  return (
    <div className="photo-group">
      <h3>Photo</h3>
      <input
        type="file"
        className='inputFile'
        accept="image/*"
        onChange={handleImageUpload}
      />
      {characterSheet.img && (
        <img className='image-preview' src={URL.createObjectURL(characterSheet.img)} alt="Selected" />
      )}
    </div>
  );
};

export default Photo;

