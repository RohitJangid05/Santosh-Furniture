import { useContext, useState } from 'react';
import Banner from './Banner'
import Catalog from './Catalog';
import Hero from './Hero';
import Loader from './Loader';
import { AppContext } from '../Context/FurnitureContext';

const Home = () => {
  let {isLoading}=useContext(AppContext)
  return (
    <>
      {
        isLoading ?
          <Loader /> :
          <div>
            <Banner />
            <Catalog />
            <Hero />
          </div>
      }
    </>
  )
}

export default Home
