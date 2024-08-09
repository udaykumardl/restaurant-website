import React from 'react';
import Cart from './Components/Cart/Cart';

import { ShoeProvider } from './Store/ShoeContext';
import './App.css';
import ShoeList from './Components/Shoe/ShoeList';

const App = () => {
  return (
    <ShoeProvider>
      <div className="app-container">
        <h1>Shoe Commerce</h1>
        <div className="content">
          <ShoeList />
          <Cart />
        </div>
      </div>
    </ShoeProvider>
  );
};

export default App;
