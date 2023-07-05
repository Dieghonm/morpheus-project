import React, { useContext, useState } from 'react';
import MyContext from '../../helpers/context/MyContext';
import Header from './Header';

// import './styles/Notes.css';

const Notes = () => {
  const { characterSheet, setCharacterSheet, screen } = useContext(MyContext);
  const [notesArray, setNotesArray] = useState([]);
  const [newNote, setNewNote] = useState({ title: '', content: ''});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNote({...newNote, [name]: value})
  };

  const renderNotes = () => {
    return (
      <div className="notes-group">
        <h4>Anotações</h4>
        <div>
          <span>Título</span>
          <span>Conteúdo</span>
        </div>

        {notesArray.length > 0 &&
          notesArray.map((note, index) => (
            <div key={index}>
              <span>{note.title}</span>
              <span>{note.content}</span>
              <button onClick={() => deleteNote(index)}>Excluir</button>
            </div>
          ))}

        <div>
          <input
            type="text"
            name="title"
            placeholder="Título"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="content"
            placeholder="Conteúdo"
            onChange={handleInputChange}
          />
          <button onClick={addNote}>Adicionar</button>
        </div>
      </div>
    );
  };

  const addNote = () => {
    setNotesArray([...notesArray, newNote]);
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notesArray];
    updatedNotes.splice(index, 1);
    setNotesArray(updatedNotes);
  };

  return (
    <div className="notes-container">
      <Header />
      {renderNotes()}
    </div>
  );
};

export default Notes;
