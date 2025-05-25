import React, { useContext, useEffect, useRef } from 'react';
import { AppContext } from '../Context/FurnitureContext';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollingText from './ScrollingText';

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  let { assets } = useContext(AppContext)
  let bannerRef = useRef(null)

  useEffect(()=>{
    gsap.to(bannerRef.current,{
      scale:1.05,
      scrollTrigger: {
          trigger: bannerRef.current,
          start: "top 0%",
          end: "bottom 70%",
          toggleActions: "play none none reverse"
        },
    })
  },[])
  return (
    <>
      <div className='w-full relative flex flex-col justify-center items-center' >
        <div className='overflow-hidden w-full flex justify-center bg-[#f8f5f2]'>
          <img
            className='w-full md:w-[90vw] h-[50vh] md:h-[80vh] object-cover'
            ref={bannerRef}
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
      <ScrollingText/>
    </>
  );
};

export default Banner;
