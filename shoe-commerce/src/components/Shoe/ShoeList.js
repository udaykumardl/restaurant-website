import React, { useContext, useState } from 'react';
import ShoeContext from '../../Store/ShoeContext';
import './ShoeList.css';

const ShoeList = () => {
  const { state, dispatch } = useContext(ShoeContext);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const addToCart = (shoe) => {
    const selectedSize = selectedSizes[shoe.id];
    if (selectedSize) {
      dispatch({
        type: 'ADD_TO_CART',
        payload: { shoe, selectedSize },
      });

      // Decrease the quantity of the selected size in the shoes list
      const updatedShoes = state.shoes.map(item => {
        if (item.id === shoe.id && item.sizes.includes(selectedSize)) {
          const sizeIndex = item.sizes.indexOf(selectedSize);
          if (item.quantity[sizeIndex] > 0) {
            item.quantity[sizeIndex] -= 1;
          }
        }
        return item;
      });

      dispatch({ type: 'UPDATE_SHOES', payload: updatedShoes });
    }
  };

  const handleSizeChange = (shoeId, size) => {
    setSelectedSizes({
      ...selectedSizes,
      [shoeId]: size,
    });
  };

  const filteredShoes = state.shoes.filter(shoe => {
    return (
      shoe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shoe.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="shoe-list-container">
      <h2>Shoe List</h2>
      <input
        type="text"
        placeholder="Search by name or description"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredShoes.length > 0 ? (
        filteredShoes.map((shoe) => (
          <div className="shoe-item" key={shoe.id}>
            <h3>{shoe.name}</h3>
            <p>{shoe.description}</p>
            <p>Price: {shoe.price}</p>
            <select
              onChange={(e) => handleSizeChange(shoe.id, e.target.value)}
              defaultValue=""
            >
              <option value="" disabled>
                Select Size
              </option>
              {shoe.sizes.map((size, index) => (
                <option key={index} value={size}>
                  {size} (Available: {shoe.quantity[index]})
                </option>
              ))}
            </select>
            <button onClick={() => addToCart(shoe)}>Add to Cart</button>
          </div>
        ))
      ) : (
        <p>No shoes found.</p>
      )}
    </div>
  );
};

export default ShoeList;


