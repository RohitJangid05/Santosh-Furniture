import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from './NavBar'
import { products } from '../assets/assets'
import { Link } from 'react-router-dom'

const ProductsCatalog = () => {
  const [productData, setProductData] = useState([])
  const { name } = useParams()

  useEffect(() => {
    const filteredProducts = products.filter((e) => e.name === name)
    setProductData(filteredProducts)
  }, [name])

  return (
    <>
      <NavBar />
      <div className="p-4 md:p-8">
        {productData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {productData.map((e,i) => (
              <div key={e.id} className="bg-white rounded-xl shadow-sm shadow-gray-300 p-5 overflow-hidden hover:scale-105 transition-transform duration-300">
                <Link to={`/productInfo/${e.id}`}><img src={e.img} alt={`product-${i}`} className="w-full h-60 object-contain" /></Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">No products found.</p>
        )}
      </div>
    </>
  )
}

export default ProductsCatalog
