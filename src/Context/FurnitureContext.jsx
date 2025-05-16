import React, { createContext, useState, useEffect } from 'react';
import { assets } from '../assets/assets';

export const AppContext = createContext();

export const FurnitureContext = ({ children }) => {
    let [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{setIsLoading(false)},3000)
    },[])
   
    const [cartProduct, setCartProduct] = useState(() => {
        const savedCart = localStorage.getItem('cartProduct');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cartProduct', JSON.stringify(cartProduct));
    }, [cartProduct]);

    return (
        <AppContext.Provider value={{ assets, setCartProduct, cartProduct, isLoading }}>
            {children}
        </AppContext.Provider>
    );
};
