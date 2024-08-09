import React, { useState, useContext } from 'react';
import ShoeContext from '../../Store/ShoeContext';
import './AddShoe.css'; // Import CSS file for styling

const AddShoe = () => {
  const { dispatch } = useContext(ShoeContext);
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [sizes, setSizes] = useState('');
  const [quantities, setQuantities] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newShoe = {
      id: Date.now(),
      name,
      description,
      price: parseFloat(price),
      sizes: sizes.split(',').map(size => size.trim()),
      quantity: quantities.split(',').map(quantity => parseInt(quantity.trim(), 10)),
    };

    dispatch({
      type: 'ADD_SHOE',
      payload: newShoe,
    });

    // Reset the form and hide it
    setName('');
    setDescription('');
    setPrice('');
    setSizes('');
    setQuantities('');
    setShowForm(false);
  };

  return (
    <div className="add-shoe-container">
      <button className="toggle-form-button" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Close Form' : 'Add New Shoe'}
      </button>

      {showForm && (
        <form className="add-shoe-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Enter shoe name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              placeholder="Enter shoe description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              placeholder="Enter shoe price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="sizes">Sizes (comma-separated):</label>
            <input
              type="text"
              id="sizes"
              placeholder="Enter sizes"
              value={sizes}
              onChange={(e) => setSizes(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantities">Quantities (comma-separated):</label>
            <input
              type="text"
              id="quantities"
              placeholder="Enter quantities"
              value={quantities}
              onChange={(e) => setQuantities(e.target.value)}
              required
            />
          </div>
          <button type="submit">Add Shoe</button>
        </form>
      )}
    </div>
  );
};

export default AddShoe;




