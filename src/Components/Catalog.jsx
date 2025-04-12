import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Catalog = () => {
  return (
    <>
      <h1 className='text-center mt-5 font-semibold capitalize text-4xl p-3 text-[#364152]'>Categories</h1>

      <div className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-6 md:gap-10 md:p-10'>
        {[
          { to: '/product/door', img: assets.doorCatalog, label: 'Door' },
          { to: '/product/bed', img: assets.bedCatalog, label: 'Bed' },
          { to: '/product/sofa', img: assets.sofaCatalog, label: 'Sofa Set' },
          { to: '/product/diningset', img: assets.diningSetcatalog, label: "Dining Set" },
          { to: '/product/doorframe', img: assets.doorframeCatalog, label: 'Door Frame' },
          { to: '/product/chair', img: assets.chairCatalog, label: 'Chair' },
          { to: '/product/table', img: assets.tableCatalog, label: 'Table' },
        ].map(({ to, img, label }, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            key={index}
            to={to}
            className='flex flex-col justify-center items-center gap-3 w-full rounded-xl hover:shadow-sm shadow-[#d5a37acb] p-3'
          >
            <div>
              <img
                src={img}
                alt={label}
                className='w-full h-32 sm:h-36 md:h-40 object-contain'
              />
            </div>
            <p className='text-md md:text-xl font-medium text-gray-700'>{label}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Catalog;
