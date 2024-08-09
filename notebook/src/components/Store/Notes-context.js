import React, { createContext } from 'react';


const NotesContext = createContext({
  notes: [],
  addNote: (note) => {},
  updateNote: (id, updatedNote) => {},
  deleteNote: (id) => {},
});

export default NotesContext;