import React, { useState, useContext } from 'react';
import Modal from '../UI/Modal';
import ShoeContext from '../../Store/ShoeContext';
import './Cart.css';

const Cart = () => {
  const { state, dispatch } = useContext(ShoeContext);
  const [selectedShoe, setSelectedShoe] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [itemIndex, setItemIndex] = useState(null);

  const openModal = (shoe, index) => {
    setSelectedShoe(shoe);
    setItemIndex(index);
    setShowModal(true);
  };

  const calculateTotal = () => {
    return state.cart.reduce((total, item) => total + item.price, 0);
  };

  const removeFromCart = () => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemIndex });
    setShowModal(false);
  };

  return (
    <div className='cart'>
      <h2>Cart</h2>
      {state.cart.map((item, index) => (
        <div className="cart-item" key={index}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>Price: {item.price}</p>
          <p>Size: {item.size}</p>
          <button onClick={() => openModal(item, index)}>Remove</button>
        </div>
      ))}
      <h4 className='cart-total'>Total: {calculateTotal()}</h4>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        shoe={selectedShoe}
        onConfirm={removeFromCart}
      />
    </div>
  );
};

export default Cart;
