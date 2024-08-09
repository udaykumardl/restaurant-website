import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const DeleteModal = ({ candidateId, deleteCandidate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const confirmDelete = () => {
    deleteCandidate(candidateId);
    closeModal();
  };

  return (
    <>
      <button onClick={openModal}>Delete</button>
      {isOpen && ReactDOM.createPortal(
        <div className="modal">
          <div className="modal-content">
            <p>Are you sure you want to delete this candidate?</p>
            <button onClick={confirmDelete}>Yes</button>
            <button onClick={closeModal}>No</button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default DeleteModal;
