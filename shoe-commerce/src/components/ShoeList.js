// // src/components/ShoeList.js
// import React, { useState, useContext } from 'react';
// import { ShoeContext } from '../ShoeContext';
// import Modal from './Modal';

// const ShoeList = () => {
//   const { state, dispatch } = useContext(ShoeContext);
//   const [selectedShoe, setSelectedShoe] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [itemIndex, setItemIndex] = useState(null);

//   const addToCart = (shoe) => {
//     dispatch({ type: 'ADD_TO_CART', payload: shoe });
//     setShowModal(false);
//   };

//   return (
//     <div>
//       <h2>Shoe List</h2>
//       {state.shoes.map((shoe) => (
//         <div key={shoe.id}>
//           <h3>{shoe.name}</h3>
//           <p>{shoe.description}</p>
//           <p>{shoe.price}</p>
//           <button onClick={() => { setSelectedShoe(shoe); setShowModal(true); }}>
//             Select Size and Add to Cart
//           </button>
//         </div>
//       ))}
//       <Modal
//         show={showModal}
//         onClose={() => setShowModal(false)}
//         shoe={selectedShoe}
//         itemIndex={itemIndex}
//       />
//     </div>
//   );
// };

// export default ShoeList;

// src/components/ShoeList.js
import React, { useState, useContext } from 'react';
import { ShoeContext } from '../ShoeContext';
import AddToCartModal from './AddToCartModal';

const ShoeList = () => {
  const { state, dispatch } = useContext(ShoeContext);
  const [selectedShoe, setSelectedShoe] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const addToCart = () => {
    if (selectedShoe && selectedSize) {
      // Find the index of the selected size
      const sizeIndex = selectedShoe.sizes.indexOf(selectedSize);
      if (sizeIndex !== -1 && selectedShoe.quantity[sizeIndex] > 0) {
        // Decrease the available quantity
        const updatedQuantity = [...selectedShoe.quantity];
        updatedQuantity[sizeIndex]--;

        dispatch({
          type: 'ADD_TO_CART',
          payload: {
            ...selectedShoe,
            selectedSize,
            quantity: selectedShoe.quantity[sizeIndex] // Only include the selected quantity
          }
        });

        // Update the available quantity in the state
        const updatedShoes = [...state.shoes];
        updatedShoes[selectedShoe.id - 1].quantity = updatedQuantity;
        dispatch({ type: 'UPDATE_SHOES', payload: updatedShoes });

        setShowModal(false);
      } else {
        alert('Selected size is not available.');
      }
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredShoes = state.shoes.filter(shoe =>
    shoe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Shoe List</h2>
      <input
        type="text"
        placeholder="Search shoes..."
        value={searchQuery}
        onChange={handleSearch}
      />
      {filteredShoes.map((shoe) => (
        <div key={shoe.id}>
          <h3>{shoe.name}</h3>
          <p>{shoe.description}</p>
          <p>{shoe.price}</p>
          <button onClick={() => { setSelectedShoe(shoe); setShowModal(true); }}>
            Select Size and Add to Cart
          </button>
        </div>
      ))}
      <AddToCartModal
        show={showModal}
        onClose={() => setShowModal(false)}
        shoe={selectedShoe}
        selectedSize={selectedSize}
        onSelectSize={setSelectedSize}
        onAddToCart={addToCart}
      />
    </div>
  );
};

export default ShoeList;
