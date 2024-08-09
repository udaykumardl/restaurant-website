import React, { createContext, useReducer } from 'react';

const initialState = {
  cart: [],
  shoes: [],
};

const shoeReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((_, index) => index !== action.payload),
      };
    case 'ADD_SHOE':
      return {
        ...state,
        shoes: [...state.shoes, action.payload],
      };
    case 'UPDATE_SHOES':
      return {
        ...state,
        shoes: action.payload,
      };
    default:
      return state;
  }
};

const ShoeContext = createContext();

export const ShoeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shoeReducer, initialState);

  return (
    <ShoeContext.Provider value={{ state, dispatch }}>
      {children}
    </ShoeContext.Provider>
  );
};

export default ShoeContext;
