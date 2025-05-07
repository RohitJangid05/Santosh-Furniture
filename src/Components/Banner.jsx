import React from 'react';
import { assets } from '../assets/assets';

const Banner = () => {
  return (
    <>
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
          <h1 className='title-heading text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-700 leading-tight'>
            Upgrade Your Living Space With
            <p>Santosh Furniture</p>
          </h1>
        </div>
      </div>
      <div className="overflow-hidden whitespace-nowrap py-3 border-2 w-full border-slate-300">
        <div className="animate-scroll flex gap-3 text-2xl font-medium text-[#364152]">
          <p className='bg-[#e8c093b9] px-4 py-2 rounded-lg'>Teak Wood</p>
          <p className='bg-[#e8c093b9] px-4 py-2 rounded-lg'>Pine Wood</p>
          <p className='bg-[#e8c093b9] px-4 py-2 rounded-lg'>Beach Wood</p>
          <p className='bg-[#e8c093b9] px-4 py-2 rounded-lg'>Hassan Wood</p>
          <p className='bg-[#e8c093b9] px-4 py-2 rounded-lg'>Door Frame</p>
          <p className='bg-[#e8c093b9] px-4 py-2 rounded-lg'>Liping Patti</p>
          <p className='bg-[#e8c093b9] px-4 py-2 rounded-lg'>Sofa</p>
          <p className='bg-[#e8c093b9] px-4 py-2 rounded-lg'>Door</p> 
          <p className='bg-[#e8c093b9] px-4 py-2 rounded-lg'>Teak Wood</p>
          <p className='bg-[#e8c093b9] px-4 py-2 rounded-lg'>Pine Wood</p>
          <p className='bg-[#e8c093b9] px-4 py-2 rounded-lg'>Beach Wood</p>
          <p className='bg-[#e8c093b9] px-4 py-2 rounded-lg'>Hassan Wood</p>
          <p className='bg-[#e8c093b9] px-4 py-2 rounded-lg'>Door Frame</p>
          <p className='bg-[#e8c093b9] px-4 py-2 rounded-lg'>Liping Patti</p>
          <p className='bg-[#e8c093b9] px-4 py-2 rounded-lg'>Sofa</p>
          <p className='bg-[#e8c093b9] px-4 py-2 rounded-lg'>Door</p> 
        </div>
      </div>

    </>
  );
};

export default Banner;
