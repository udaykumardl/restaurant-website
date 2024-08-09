import React  from 'react';
import ShoeProvider from './Store/ShoeProvider';

import Cart from './components/Cart/Cart';
import './App.css';
import AddShoe from './components/Shoe/AddShoeForm';
import ShoeList from './components/Shoe/ShoeList';


const App = () => {


  return (
    <ShoeProvider>
      <div className="app">
        <h1>Shoe Commerce Platform</h1>
        
        <AddShoe />
        <ShoeList />
        <Cart/>

      </div>
    </ShoeProvider>
  );
};

export default App;



// // App.js
// import React from 'react';
// import Cart from './components/Cart/Cart';
// import ShoeList from './components/Shoe/ShoeList';
// import AddShoeForm from './components/Shoe/AddShoeForm';
// import ShoeProvider from './Store/ShoeProvider';

// const App = () => {
//   return (
//     <ShoeProvider>
//       <div>
//         <h1>Shoe Commerce Platform</h1>
//         <AddShoeForm />
//         <ShoeList />
//         <Cart />
//       </div>
//     </ShoeProvider>
//   );
// };

// export default App;
