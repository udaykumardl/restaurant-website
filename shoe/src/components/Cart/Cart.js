

import React, { useContext } from 'react';
import ShoeContext from '../../Store/ShoeContext';
import './Cart.css';
import Modal from '../UI/Modal';

const Cart = (props ) => {
  const { state, dispatch } = useContext(ShoeContext);

  const increaseQuantity = (index) => {
    const updatedCart = [...state.cart];
    updatedCart[index].quantity += 1;
    dispatch({ type: 'UPDATE_CART', payload: updatedCart });

    updateShoeListQuantity(updatedCart[index].shoe.id, updatedCart[index].selectedSize, -1);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...state.cart];
    const removedItem = updatedCart[index];

    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      updateShoeListQuantity(removedItem.shoe.id, removedItem.selectedSize, 1);
    } else {
      updatedCart.splice(index, 1); // remove the item from the cart
      updateShoeListQuantity(removedItem.shoe.id, removedItem.selectedSize, 1);
    }

    dispatch({ type: 'UPDATE_CART', payload: updatedCart });
  };
  

  const updateShoeListQuantity = (shoeId, selectedSize, quantityChange) => {
    const updatedShoes = state.shoes.map(shoe => {
      if (shoe.id === shoeId && shoe.sizes.includes(selectedSize)) {
        const sizeIndex = shoe.sizes.indexOf(selectedSize);
        shoe.quantity[sizeIndex] += quantityChange;
      }
      return shoe;
    });

    dispatch({ type: 'UPDATE_SHOES', payload: updatedShoes });
  };

  const calculateTotal = () => {
    return state.cart.reduce((total, item) => total + item.shoe.price * item.quantity, 0);
  };


  return (
    <Modal onClose={props.onClose}>
      <div className="cart-container">
        <h2>Cart</h2>
        {state.cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <h3>{item.shoe.name}</h3>
            <p>{item.shoe.description}</p>
            <p>Price: {item.shoe.price}</p>
            <p>Size: {item.selectedSize}</p>
            <div className="quantity-controls">
              <button onClick={() => decreaseQuantity(index)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQuantity(index)}>+</button>
            </div>
            <div className="actions">
                <button className="button-alt" onClick={props.onClose}>
                Close
                </button>
                <button className="button">Order</button>
            </div>
          </div>
        ))}
        <h4 className="cart-total">Total Amount:{calculateTotal()}</h4>
      </div>
    </Modal>
  );
};

export default Cart;


