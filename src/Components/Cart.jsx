import React, { useContext } from 'react'
import { AppContext } from '../Context/FurnitureContext'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import { ToastContainer, toast } from 'react-toastify';

const Cart = () => {
  let { cartProduct, setCartProduct } = useContext(AppContext)
  return (
    <>
      <NavBar />
      <div className='mt-20'>
        <div className="p-4 md:p-8">
          {cartProduct.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
              {cartProduct.map((e, i) => (
                <div
                  key={e.id}
                  className="bg-white rounded-xl shadow-sm shadow-gray-300 p-5 overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={e.img}
                    alt={`product-${i}`}
                    className="w-full h-60 object-contain"
                  />
                  <div className='flex flex-col w-full  gap-2'>
                    <p>Product Id: {e.id}</p>
                    <Link className='cursor-pointer text-center bg-[#1E2938] text-white px-3 py-1 rounded-md' onClick={() => scrollTo(0, 0)} to={`/productInfo/${e.id}`}>View</Link>
                    <button onClick={() => {
                      let filteredProduct = cartProduct.filter(item => item.id !== e.id)
                      setCartProduct([...filteredProduct])
                      toast.success("Product removed sucessfully")
                    }} className='cursor-pointer text-center bg-red-500 text-white px-3 py-1 rounded-md'>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 text-lg w-full h-[80vh] flex justify-center items-center">No products found.</p>
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Cart
