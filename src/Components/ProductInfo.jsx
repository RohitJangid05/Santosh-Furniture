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
    console.log(productInfo)
    return (
        <>
        <NavBar/>
        <div className='w-full py-10 flex justify-center items-center'>
            <img className='h-[80vh]' src={productInfo.img} alt="" />
        </div>
        </>
    )
}

export default ProductInfo
