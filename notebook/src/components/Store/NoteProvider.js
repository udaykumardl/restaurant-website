import React, { useState, createContext } from 'react';
import NotesContext from './NotesContext';

const NotesProvider = (props) => {
  const [notes, setNotes] = useState([]);

  const addNoteHandler = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  const updateNoteHandler = (id, updatedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === id ? updatedNote : note))
    );
  };

  const deleteNoteHandler = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const contextValue = {
    notes: notes,
    addNote: addNoteHandler,
    updateNote: updateNoteHandler,
    deleteNote: deleteNoteHandler,
  };

  return (
    <NotesContext.Provider value={contextValue}>
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
