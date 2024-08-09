import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Backdrop = ({ onClose }) => {
  return <div className="backdrop" onClick={onClose}></div>;
};

const ModalOverlay = ({ shoe, selectedSize, onSelectSize, onAddToCart, onConfirm }) => {
  const handleSizeSelect = (event) => {
    onSelectSize(event.target.value);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onConfirm || onAddToCart}>&times;</span>
        <h3>{shoe.name}</h3>
        <p>{shoe.description}</p>
        <p>Price: ${shoe.price.toFixed(2)}</p>
        {onSelectSize ? (
          <>
            <select value={selectedSize} onChange={handleSizeSelect}>
              <option value="">Select Size</option>
              {shoe.sizes.map((size, index) => (
                <option key={index} value={size}>{size} ({shoe.quantity[index]} available)</option>
              ))}
            </select>
            <button onClick={onAddToCart}>Add to Cart</button>
          </>
        ) : (
          <button onClick={onConfirm}>Delete from Cart</button>
        )}
      </div>
    </div>
  );
};

const Modal = ({ show, onClose, shoe, selectedSize, onSelectSize, onAddToCart, onConfirm }) => {
  if (!show || !shoe) {
    return null;
  }

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(
        <ModalOverlay 
          shoe={shoe} 
          selectedSize={selectedSize} 
          onSelectSize={onSelectSize} 
          onAddToCart={onAddToCart} 
          onConfirm={onConfirm}
        />, 
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default Modal;
