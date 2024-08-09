import React, { useContext } from 'react';
import ShoeContext from '../../Store/ShoeContext';
import './Cart.css';
import Modal from '../UI/Modal';

const Cart = () => {
  const { state, dispatch } = useContext(ShoeContext);

  const increaseQuantity = (index) => {
    const updatedCart = [...state.cart];
    updatedCart[index].quantity += 1;
    dispatch({ type: 'UPDATE_CART', payload: updatedCart });

    // Update shoe list quantity
    updateShoeListQuantity(updatedCart[index].shoe.id, updatedCart[index].selectedSize, -1);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...state.cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    } else {
      // Remove item from cart if quantity is 1 or less
      updatedCart.splice(index, 1);
    }
    dispatch({ type: 'UPDATE_CART', payload: updatedCart });

    // Update shoe list quantity
    updateShoeListQuantity(updatedCart[index]?.shoe.id, updatedCart[index]?.selectedSize, 1);
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
    <Modal>
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
        </div>
      ))}
      <h4 className="cart-total">Total: {calculateTotal()}</h4>
    </div>
    </Modal>
  );
};

export default Cart;





