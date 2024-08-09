import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.module.css';

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return ReactDOM.createPortal(
    <>
      <Backdrop onClose={props.onClose} />
      <ModalOverlay>{props.children}</ModalOverlay>
    </>,
    document.getElementById('overlays')
  );
};

export default Modal;
