// src/components/AddToCartModal.js
import React from 'react';

const AddToCartModal = ({ show, onClose, shoe, selectedSize, onSelectSize, onAddToCart }) => {
  if (!show || !shoe) {
    return null;
  }

  const handleSizeSelect = (event) => {
    onSelectSize(event.target.value);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h3>{shoe.name}</h3>
        <p>{shoe.description}</p>
        <p>Price: {shoe.price}</p>
        <select value={selectedSize} onChange={handleSizeSelect}>
          <option value="">Select Size</option>
          {shoe.sizes.map((size, index) => (
            <option key={index} value={size}>{size} ({shoe.quantity[index]} available)</option>
          ))}
        </select>
        <button onClick={onAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default AddToCartModal;
