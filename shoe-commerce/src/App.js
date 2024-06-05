// src/App.js
import React from 'react';
import { ShoeProvider } from './ShoeContext';
import ShoeList from './components/ShoeList';
import Cart from './components/Cart'; // Import Cart component

const App = () => {
  return (
    <ShoeProvider>
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
        <div>
          <h1>Shoe Commerce Platform</h1>
          <ShoeList />
        </div>
        <div style={{ marginLeft: 'auto', marginTop: '20px' }}>
          <Cart />
        </div>
      </div>
    </ShoeProvider>
  );
};

export default App;
