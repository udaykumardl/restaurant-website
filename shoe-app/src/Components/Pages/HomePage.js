

import React from 'react';
import { useShoes } from '../../Store/ShoeContext';


const HomePage = () => {
    const { shoes, addToCart } = useShoes();

    return (
        <div>
            <h1>Welcome to the Shoe Store</h1>
            <div>
                {shoes.map((shoe, index) => (
                    <ShoeItem key={index} shoe={shoe} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
};

const ShoeItem = ({ shoe, addToCart }) => {
    const [selectedSize, setSelectedSize] = React.useState('');
    const [availableQuantity, setAvailableQuantity] = React.useState(0);

    // Function to update available quantity based on selected size
    const updateAvailableQuantity = (size) => {
        const selectedShoeSize = shoe.sizes.find(s => s.size === size);
        if (selectedShoeSize) {
            setAvailableQuantity(selectedShoeSize.availableQuantity);
        } else {
            setAvailableQuantity(0); // Set available quantity to 0 if size not found
        }
    };

    // Update available quantity when size changes
    React.useEffect(() => {
        if (selectedSize !== '') {
            updateAvailableQuantity(selectedSize);
        }
    }, [selectedSize, shoe.sizes]);

    const handleAddToCart = () => {
        const selectedShoe = {
            ...shoe,
            size: selectedSize,
            availableQuantity: availableQuantity,
        };
        addToCart(selectedShoe);
    };

    return (
        <div>
            <h3>{shoe.brand}</h3>
            <h4>{shoe.name}</h4>
            <p>{shoe.description}</p>
            <p>Price: {shoe.price}</p>
            <p>
                Size:
                <select onChange={(e) => setSelectedSize(e.target.value)} value={selectedSize}>
                    <option value="">Select Size</option>
                    {shoe.sizes.map((size, index) => (
                        <option key={index} value={size.size}>
                            {size.size} (Available: {size.availableQuantity})
                        </option>
                    ))}
                </select>
            </p>
            <p>Available Quantity: {availableQuantity}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default HomePage;
