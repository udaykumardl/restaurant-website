// src/components/ConfirmRemoveModal.js
import React, { useContext } from 'react';
import { ShoeContext } from '../ShoeContext';
import './Modal.css';

const ConfirmRemoveModal = ({ show, onClose, shoe, itemIndex }) => {
  const { dispatch } = useContext(ShoeContext);

  if (!show || !shoe) {
    return null;
  }

  const removeFromCart = () => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemIndex });
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h3>{shoe.name}</h3>
        <p>{shoe.description}</p>
        <p>Price: {shoe.price}</p>
        <button onClick={removeFromCart}>Delete from Cart</button>
      </div>
    </div>
  );
};

export default ConfirmRemoveModal;
