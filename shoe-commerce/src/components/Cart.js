// // src/components/Cart.js
// import React, { useState, useContext } from 'react';
// import { ShoeContext } from '../ShoeContext';
// import Modal from './Modal';

// const Cart = () => {
//   const { state } = useContext(ShoeContext);
//   const [selectedShoe, setSelectedShoe] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [itemIndex, setItemIndex] = useState(null);

//   const openModal = (shoe, index) => {
//     setSelectedShoe(shoe);
//     setItemIndex(index);
//     setShowModal(true);
//   };

//   const calculateTotal = () => {
//     return state.cart.reduce((total, item) => total + item.price, 0);
//   };

//   return (
//     <div>
//       <h2>Cart</h2>
//       {state.cart.map((item, index) => (
//         <div key={index}>
//           <h3>{item.name}</h3>
//           <p>{item.description}</p>
//           <p>{item.price}</p>
//           <p>Size: {item.selectedSize}</p>
//           <button onClick={() => openModal(item, index)}>Remove</button>
//         </div>
//       ))}
//       <h4>Total: {calculateTotal()}</h4>
//       <Modal
//         show={showModal}
//         onClose={() => setShowModal(false)}
//         shoe={selectedShoe}
//         itemIndex={itemIndex}
//       />
//     </div>
//   );
// };

// export default Cart;

// 


// src/components/Cart.js
import React, { useState, useContext } from 'react';
import { ShoeContext } from '../ShoeContext';
import ConfirmRemoveModal from './ConfirmRemoveModal';

const Cart = () => {
  const { state } = useContext(ShoeContext);
  const [selectedShoe, setSelectedShoe] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [itemIndex, setItemIndex] = useState(null);

  const openModal = (shoe, index) => {
    setSelectedShoe(shoe);
    setItemIndex(index);
    setShowModal(true);
  };

  const calculateTotal = () => {
    return state.cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h2>Cart</h2>
      {state.cart.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>Price: {item.price}</p>
          <p>Size: {item.selectedSize}</p>
          
          <button onClick={() => openModal(item, index)}>Remove</button>
        </div>
      ))}
      <h4>Total: {calculateTotal()}</h4>
      <ConfirmRemoveModal
        show={showModal}
        onClose={() => setShowModal(false)}
        shoe={selectedShoe}
        itemIndex={itemIndex}
      />
    </div>
  );
};

export default Cart;

