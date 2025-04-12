import React from 'react'
import LandingPage from './LandingPage'
import Catalog from './Catalog';
import Hero from './Hero';
import Footer from './Footer';

const Home = () => {
  return (
    <div >
      <LandingPage />
      <Catalog />
      <Hero/>
      {/* <Footer/> */}
    </div>
  )
}

export default Home
