// src/ShoeContext.js
import React, { createContext, useReducer } from 'react';


const initialState = {
    cart:[],
  shoes: [
    { id: 1, name: 'guchi', description: '100% cotton', price: 50, sizes: ['S', 'M', 'L'], quantity: [5, 3, 2] },
    { id: 2, name: 'Nike air', description: '100% cotton', price: 60, sizes: ['S', 'M', 'L'], quantity: [2, 4, 3] },
    { id: 1, name: 'Puma', description: '100% cotton', price: 50, sizes: ['S', 'M', 'L'], quantity: [10, 13, 2] },

    // Add more shoes here
  ],
  
};




const ShoeContext = createContext();

const shoeReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((_, index) => index !== action.payload)
      };
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

export { ShoeContext, ShoeProvider };
