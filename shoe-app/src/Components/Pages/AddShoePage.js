
import React, { useState } from 'react';
import { useShoes } from '../../Store/ShoeContext';

const AddShoePage = () => {
    const { addShoe } = useShoes();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [size, setSize] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addShoe({ name, description, price, size, quantity });
        setName('');
        setDescription('');
        setPrice('');
        setSize('');
        setQuantity('');
    };

    return (
        <div>
            <h1>Add a New Shoe</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <label>Size:</label>
                    <input type="text" value={size} onChange={(e) => setSize(e.target.value)} />
                </div>
                <div>
                    <label>Quantity:</label>
                    <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                </div>
                <button type="submit">Add Shoe</button>
            </form>
        </div>
    );
};

export default AddShoePage;
