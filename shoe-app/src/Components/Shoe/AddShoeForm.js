// components/Shoes/ShoeItem/AddShoeForm.js
import React, { useState, useContext } from 'react';
import ShoeContext from '../../../store/ShoeContext';
import classes from './AddShoeForm.module.css';

const AddShoeForm = () => {
  const { dispatch } = useContext(ShoeContext);
  const [enteredName, setEnteredName] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredPrice, setEnteredPrice] = useState('');
  const [enteredSizes, setEnteredSizes] = useState('');
  const [enteredQuantities, setEnteredQuantities] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    const newShoe = {
      id: Math.random().toString(),
      name: enteredName,
      description: enteredDescription,
      price: parseFloat(enteredPrice),
      sizes: enteredSizes.split(',').map(size => size.trim()),
      quantity: enteredQuantities.split(',').map(quantity => parseInt(quantity.trim(), 10)),
    };

    dispatch({ type: 'ADD_SHOE', payload: newShoe });

    setEnteredName('');
    setEnteredDescription('');
    setEnteredPrice('');
    setEnteredSizes('');
    setEnteredQuantities('');
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Shoe Name</label>
        <input 
          type="text" 
          id="name" 
          value={enteredName} 
          onChange={(event) => setEnteredName(event.target.value)} 
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Description</label>
        <input 
          type="text" 
          id="description" 
          value={enteredDescription} 
          onChange={(event) => setEnteredDescription(event.target.value)} 
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="price">Price</label>
        <input 
          type="number" 
          id="price" 
          value={enteredPrice} 
          onChange={(event) => setEnteredPrice(event.target.value)} 
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="sizes">Sizes (comma-separated)</label>
        <input 
          type="text" 
          id="sizes" 
          value={enteredSizes} 
          onChange={(event) => setEnteredSizes(event.target.value)} 
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="quantities">Quantities (comma-separated)</label>
        <input 
          type="text" 
          id="quantities" 
          value={enteredQuantities} 
          onChange={(event) => setEnteredQuantities(event.target.value)} 
        />
      </div>
      <button type="submit">Add Shoe</button>
    </form>
  );
};

export default AddShoeForm;
