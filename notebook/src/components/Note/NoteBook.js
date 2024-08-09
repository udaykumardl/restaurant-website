import React, { useContext, useState } from 'react';
import NotesContext from '../Store/Notes-context';
import Modal from '../UI/Modal';
import NoteForm from './NoteForm';

const NoteBook = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState(null);
  const notesCtx = useContext(NotesContext);

  const addNoteHandler = () => {
    setNoteToEdit(null);
    setIsModalOpen(true);
  };

  const editNoteHandler = (note) => {
    setNoteToEdit(note);
    setIsModalOpen(true);
  };

  const saveNoteHandler = (note) => {
    if (noteToEdit) {
      notesCtx.updateNote(note.id, note);
    } else {
      notesCtx.addNote(note);
    }
  };

  return (
    <div>
      <h1>NoteBook</h1>
      <button onClick={addNoteHandler}>Add New Note</button>
      <ul>
        {notesCtx.notes.map(note => (
          <li key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.description}</p>
            <button onClick={() => editNoteHandler(note)}>Edit</button>
            <button onClick={() => notesCtx.deleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <NoteForm
            note={noteToEdit}
            onSaveNote={saveNoteHandler}
            onClose={() => setIsModalOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
};

export default NoteBook;
