import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductsCatalog from './Components/ProductsCatalog';
import Home from './Components/Home';
import ProductInfo from './Components/ProductInfo';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:name" element={<ProductsCatalog />} />
        <Route path='productInfo/:id' element={<ProductInfo/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
