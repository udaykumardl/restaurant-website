
import React, { useContext } from 'react';
import ShoeContext from '../../Store/ShoeContext';
import './HeaderCartButton.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(ShoeContext);
  let quantity = 0;

  if (cartCtx.state && cartCtx.state.cart) {
    cartCtx.state.cart.forEach((item) => {
      quantity = quantity + item.quantity;
    });
  }

  return (
    <button className="header-cart-button" onClick={props.onClick}>
      <span>Your Cart</span>
      <span className="badge">{quantity}</span>
    </button>
  );
};

export default HeaderCartButton;
