import React, { useState, useContext } from 'react';
import Modal from '../UI/Modal';
import ShoeContext from '../../Store/ShoeContext';
import './ShoeList.css';

const ShoeList = () => {
  const { state, dispatch } = useContext(ShoeContext);
  const [selectedShoe, setSelectedShoe] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const addToCart = () => {
    if (selectedShoe && selectedSize) {
      const sizeIndex = selectedShoe.sizes.indexOf(selectedSize);
      if (sizeIndex !== -1 && selectedShoe.quantity[sizeIndex] > 0) {
        const updatedQuantity = [...selectedShoe.quantity];
        updatedQuantity[sizeIndex]--;

        dispatch({
          type: 'ADD_TO_CART',
          payload: {
            ...selectedShoe,
            size: selectedSize,
            availableQuantity: updatedQuantity[sizeIndex],
          },
        });

        const updatedShoes = state.shoes.map((shoe) =>
          shoe.id === selectedShoe.id
            ? { ...shoe, quantity: updatedQuantity }
            : shoe
        );

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

  const filteredShoes = state.shoes.filter((shoe) =>
    shoe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='shoe-list'>
      <h2>Shoe List</h2>
      <input
        type="text"
        placeholder="Search shoes..."
        value={searchQuery}
        onChange={handleSearch}
      />
      {filteredShoes.map((shoe) => (
        <div className="shoe-card" key={shoe.id}>
          <h3>{shoe.name}</h3>
          <p>{shoe.description}</p>
          <p>${shoe.price.toFixed(2)}</p>
          <button onClick={() => { setSelectedShoe(shoe); setShowModal(true); }}>
            Select Size and Add to Cart
          </button>
        </div>
      ))}
      <Modal
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

