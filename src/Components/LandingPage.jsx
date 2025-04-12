import React from 'react';
import { assets } from '../assets/assets';

const LandingPage = () => {
  return (
    <div className='w-full relative flex flex-col justify-center items-center'>
      <div className='w-full flex justify-center bg-[#f8f5f2]'>
        <img
          className='w-full md:w-[90vw] h-[50vh] md:h-[80vh] object-cover'
          loading='lazy'
          src={assets.Banner}
          alt="Banner"
        />
      </div>
      <div className='absolute top-0 flex flex-col gap-6 justify-center items-center w-[90%] md:w-3/4 lg:w-1/2 h-[50%] text-center px-4'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-700 leading-tight'>
          Upgrade Your Living Space With 
          <p>Santosh Furniture</p>
        </h1>
        
      </div>
    </div>
  );
};

export default LandingPage;
