import React, { useState, useEffect } from 'react';

const NoteForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');

  useEffect(() => {
    if (props.note) {
      setEnteredTitle(props.note.title);
      setEnteredDescription(props.note.description);
    }
  }, [props.note]);

  const submitHandler = (event) => {
    event.preventDefault();

    const noteData = {
      id: props.note ? props.note.id : Math.random().toString(),
      title: enteredTitle,
      description: enteredDescription,
    };

    props.onSaveNote && props.onSaveNote(noteData);
    props.onClose();
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={enteredTitle}
          onChange={(event) => setEnteredTitle(event.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          value={enteredDescription}
          onChange={(event) => setEnteredDescription(event.target.value)}
        />
      </div>
      <div>
        <button type="submit">{props.note ? 'Update Note' : 'Add Note'}</button>
      </div>
    </form>
  );
};

export default NoteForm;
