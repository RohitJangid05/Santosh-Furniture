import React, {useContext} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductsCatalog from './Components/ProductsCatalog';
import Home from './Components/Home';
import ProductInfo from './Components/ProductInfo';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import { FurnitureContext, AppContext } from './Context/FurnitureContext';
import About from './Components/About';
import Contact from './Components/Contact';

const AppContent = () => {
  const { isLoading } = useContext(AppContext);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productname" element={<ProductsCatalog />} />
          <Route path="/product/:productname/:catogrey" element={<ProductsCatalog />} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/productInfo/:id' element={<ProductInfo />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        {!isLoading && <Footer />}
      </BrowserRouter>
    </>
  );
};

const App = () => {
  return (
    <FurnitureContext>
      <AppContent />
    </FurnitureContext>
  );
};

export default App;
