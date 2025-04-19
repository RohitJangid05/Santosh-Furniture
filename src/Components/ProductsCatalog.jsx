import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import NavBar from './NavBar'
import { products } from '../assets/assets'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const ProductsCatalog = () => {
  const [catogery, setCategory] = useState([])
  const [productData, setProductData] = useState([])
  const [searchProduct, setSearchProduct] = useState("")
  const { productname, catogrey } = useParams()
  const { pathname } = useLocation()

  // Filter categories
  useEffect(() => {
    const filteredProducts = products.filter(e => e.productName === productname)
    const seen = []
    const filteredCategory = filteredProducts.filter(e => {
      if (!e.catogery || seen.includes(e.catogery)) return false
      seen.push(e.catogery)
      return true
    })
    setCategory(filteredCategory)
  }, [productname])

  // Search + Reset Logic
  useEffect(() => {
    const filteredProducts = products.filter(e => e.productName === productname)

    if (searchProduct.trim() === "") {
      if (pathname === `/product/${productname}`) {
        setProductData(filteredProducts)
      } else {
        const filteredCategory = filteredProducts.filter(e => e.catogery === catogrey)
        setProductData(filteredCategory)
      }
    } else {
      const searchFilter = filteredProducts.filter(e =>
        e.id.toLowerCase().startsWith(searchProduct.toLowerCase())
      )
      setProductData(searchFilter)
    }
  }, [searchProduct, productname, catogrey, pathname])

  // Set product data on page load or when params change
  useEffect(() => {
    const filteredProducts = products.filter(e => e.productName === productname)
    if (pathname === `/product/${productname}`) {
      setProductData(filteredProducts)
    } else {
      const filteredCategory = filteredProducts.filter(e => e.catogery === catogrey)
      setProductData(filteredCategory)
    }
  }, [productname, catogrey, pathname])

  return (
    <div className='flex flex-col gap-3 items-center'>
      <NavBar />
      <div className='flex flex-wrap gap-4 w-full justify-center p-3 rounded-lg shadow-sm shadow-gray-400 bg-white'>
        <div className="flex flex-wrap gap-2 justify-center">
          {catogery.map((item, index) => (
            <Link
              to={`/product/${productname}/${item.catogery}`}
              key={index}
              className="bg-gray-900 text-white px-4 py-2 rounded-sm hover:bg-gray-800 transition cursor-pointer"
            >
              {item.catogery}
            </Link>
          ))}
        </div>
        <form
          className="flex flex-wrap items-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            onChange={(e) => setSearchProduct(e.target.value)}
            value={searchProduct}
            type="text"
            placeholder="Search by Product ID..."
            className="px-4 py-2 h-10 border border-gray-300 rounded-sm outline-none"
          />
          <button
            type="submit"
            className="h-10 flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-sm hover:bg-green-600 transition cursor-pointer"
          >
            <FaSearch className="text-white" />
          </button>
        </form>
      </div>
      <div className="p-4 md:p-8">
        {productData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {productData.map((e, i) => (
              <div
                key={e.id}
                className="bg-white rounded-xl shadow-sm shadow-gray-300 p-5 overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <Link onClick={() => scrollTo(0, 0)} to={`/productInfo/${e.id}`}>
                  <img
                    src={e.img}
                    alt={`product-${i}`}
                    className="w-full h-60 object-contain"
                  />
                </Link>
                <p>Product Id: {e.id}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">No products found.</p>
        )}
      </div>
    </div>
  )
}

export default ProductsCatalog
