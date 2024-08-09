

import React, { useReducer } from 'react';
import ShoeContext from './ShoeContext';

const initialState = {
    cart:[],
    shoes:[] 
};

const shoeReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const { shoe, selectedSize } = action.payload;
        const existingCartItemIndex = state.cart.findIndex(
          item => item.shoe.id === shoe.id && item.selectedSize === selectedSize
        );
  
        let updatedCart;
  
        if (existingCartItemIndex !== -1) {        //item already in the acrt update the quantity
          updatedCart = [...state.cart];
          updatedCart[existingCartItemIndex] = {
            ...updatedCart[existingCartItemIndex],
            quantity: updatedCart[existingCartItemIndex].quantity + 1,
          };
        } else {                                   //add the item if not exist in acrt
          updatedCart = [
            ...state.cart,
            {
              shoe,
              selectedSize,
              quantity: 1,
            },
          ];
        }
  
        return {
          ...state,
          cart: updatedCart,
        };
  
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cart: state.cart.filter((_, index) => index !== action.payload),
        };
  
      case 'UPDATE_CART':
        return { ...state , cart: action.payload,};
  
      case 'UPDATE_SHOES':
        return {...state, shoes: action.payload,};
  
      case 'ADD_SHOE':
        return {...state, shoes: [...state.shoes, action.payload],};
  
      default:
        return state;
    }
  };
  

  const ShoeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(shoeReducer, initialState);
  
    return (
      <ShoeContext.Provider value={{ state, dispatch }}>
        {children}
      </ShoeContext.Provider>
    );
  };
  
  export default ShoeProvider;