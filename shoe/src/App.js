
import React, { useState } from 'react';
import ShoeProvider from './Store/ShoeProvider';
import Cart from './components/Cart/Cart';
import './App.css';
import AddShoe from './components/Shoe/AddShoe';
import ShoeList from './components/Shoe/ShoeList';
import Header from './components/Layout/Header';

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <ShoeProvider>
      <div className="app">
        <Header onShowCart={showCartHandler} />
        <AddShoe />
        <ShoeList />
        {cartIsShown && <Cart onClose={hideCartHandler} />}
      </div>
    </ShoeProvider>
  );
};

export default App;
