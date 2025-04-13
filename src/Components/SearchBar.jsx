import React, { useEffect, useState } from 'react'
import { products } from '../assets/assets'
import { useParams } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa' 
import { Link } from 'react-router-dom'

const SearchBar = () => {
    let { productname } = useParams()
    let [catogery, setCategory] = useState([])

    useEffect(() => {
        let filteredProducts = products.filter(e => e.productName === productname)
        let seen = []
        let filteredCatogery = filteredProducts.filter(e => {
            if (!e.catogery) return false
            if (seen.includes(e.catogery)) return false
            seen.push(e.catogery)
            return true
        })
        setCategory(filteredCatogery)
    }, [productname])

    return (
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
            <form className="flex flex-wrap items-center">
                <input
                    type="text"
                    placeholder="Search..."
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
    )
}

export default SearchBar
