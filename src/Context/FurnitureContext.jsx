import React, { createContext, useState } from 'react';
import { assets } from '../assets/assets';

export const AppContext = createContext();

export const FurnitureContext = ({ children }) => {
    let [cartProduct,setCartProduct]=useState([])
    return (
        <AppContext.Provider value={{assets,setCartProduct,cartProduct}}>
            {children}
        </AppContext.Provider>
    );
};
