import React, { createContext, useState, useEffect } from 'react';
import { assets } from '../assets/assets';

export const AppContext = createContext();

export const FurnitureContext = ({ children }) => {
    // Initialize cartProduct from localStorage or fallback to an empty array
    const [cartProduct, setCartProduct] = useState(() => {
        const savedCart = localStorage.getItem('cartProduct');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Update localStorage whenever cartProduct changes
    useEffect(() => {
        localStorage.setItem('cartProduct', JSON.stringify(cartProduct));
    }, [cartProduct]);

    return (
        <AppContext.Provider value={{ assets, setCartProduct, cartProduct }}>
            {children}
        </AppContext.Provider>
    );
};
