import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'; 

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>X</button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') // This should be in your HTML
  );
};

export default Modal;

