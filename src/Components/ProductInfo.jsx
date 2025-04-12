import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../assets/assets'
import NavBar from './NavBar'

const ProductInfo = () => {
    let { id } = useParams()
    let [productInfo, setProductInfo] = useState({})

    useEffect(() => {
        const filteredProducts = products.find((e) => e.id == id)
        setProductInfo(filteredProducts)
    }, [id])

    return (
        <>
            <NavBar />
            <div className="w-full min-h-screen p-6 flex justify-center items-center">
                <div className="w-11/12 sm:w-2/3 md:w-1/3 aspect-square p-4 flex items-center justify-center">
                    <img
                        src={productInfo.img}
                        alt="Product Img"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
        </>
    )
}

export default ProductInfo
