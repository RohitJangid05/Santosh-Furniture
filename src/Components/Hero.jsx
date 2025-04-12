import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-[#f8f5f2] overflow-hidden py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Text Section */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Elevate Your Living <br /> with Timeless Furniture
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-md">
            Crafted with elegance and built to last. Discover pieces that bring life and comfort to your space.
          </p>
          <button onClick={()=>scrollTo(0,580)}  className="px-6 py-3 bg-gray-900 text-white text-lg rounded-full hover:bg-gray-700 transition-all duration-300 cursor-pointer">
            Explore Collection
          </button>
        </div>

        {/* Images Section */}
        <div className="relative w-full h-[350px] md:h-[500px] flex items-center justify-center">
          <img
            src="hero1.jpg"
            alt="Luxury Sofa"
            className="absolute w-[60%] h-auto top-0 left-0 rounded-3xl shadow-xl object-cover z-10"
          />
          {/* Image 2 */}
          <img
            src="hero2.webp"
            alt="Modern Chair"
            className="absolute w-[60%] h-auto bottom-0 right-0 rounded-3xl shadow-xl object-cover transform scale-105 rotate-2 z-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
