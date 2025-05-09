import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams, Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import NavBar from './NavBar'
import { products } from '../assets/assets'
import { AppContext } from '../Context/FurnitureContext'

const ProductsCatalog = () => {
  const [catogery, setCategory] = useState([])
  const [productData, setProductData] = useState([])
  const [searchProduct, setSearchProduct] = useState("")
  const { productname, catogrey } = useParams()
  const { pathname } = useLocation()
  const { cartProduct, setCartProduct } = useContext(AppContext)
  console.log(cartProduct)

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
    <div className='flex flex-col gap-3 items-center w-full'>
      <NavBar />
      <div className='mt-22 flex flex-wrap gap-4 w-full justify-center p-3 rounded-lg shadow-sm shadow-gray-400 bg-white'>
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

      <div className="p-4 md:p-8 w-full">
        {productData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {productData.map((e, i) => (
              <div
                key={e.id}
                className="bg-white w-full rounded-xl shadow-sm shadow-gray-300 p-5 overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={e.img}
                  alt={`product-${i}`}
                  className="w-full h-48 sm:h-52 md:h-60 mb-5 object-contain"
                />
                <div className='flex flex-col w-full gap-2'>
                  <p>Product Id: {e.id}</p>
                  <div className='w-full flex justify-between'>
                    <Link
                      className='cursor-pointer bg-[#1E2938] text-white px-3 py-1 rounded-md'
                      onClick={() => scrollTo(0, 0)}
                      to={`/productInfo/${e.id}`}
                    >
                      View
                    </Link>
                    <button
                      className='cursor-pointer bg-[#1E2938] text-white px-3 py-1 rounded-md'
                      onClick={() => {
                        let findData = cartProduct.some((findId) => findId.id == e.id)
                        if (findData) {
                          alert("Item already added!")
                        } else {
                          setCartProduct(prev => [...prev, e])
                        }
                      }}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg w-full h-[80vh] flex justify-center items-center">
            No products found.
          </p>
        )}
      </div>
    </div>
  )
}

export default ProductsCatalog
