import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductsCatalog from './Components/ProductsCatalog';
import Home from './Components/Home';
import ProductInfo from './Components/ProductInfo';
import Footer from './Components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productname" element={<ProductsCatalog />} />
        <Route path="/product/:productname/:catogrey" element={<ProductsCatalog />} />
        <Route path='productInfo/:id' element={<ProductInfo/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
