import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { FaShoppingCart } from 'react-icons/fa'
import { AppContext } from '../Context/FurnitureContext';

const NavBar = () => {
    let {assets}=useContext(AppContext)
    let {pathname} = useLocation()
    let {cartProduct}=useContext(AppContext)
    return (
        <nav className='fixed top-0 w-full flex justify-between items-center px-5 py-3 shadow-sm bg-white z-10'>
            <Link to="/"><img className='w-15' src={assets.logo} alt="Logo" /></Link>
            <div className='flex justify-center items-center gap-5'>
{
    pathname=='/cart'?"":
                <Link to="/cart" onClick={()=>scrollTo(0,0)}  className='relative text-3xl font-bold text-[#3F3122]'>
                    <FaShoppingCart className='' />
                    {cartProduct.length>0?<div className='flex justify-center items-center absolute top-[-4px] right-[-4px]  bg-white border-[#3F3122] border-2 p-2 text-[10px] w-4 h-4 rounded-full'>{cartProduct.length}</div>:""}
                </Link>
}
                <Link className='text-3xl font-bold text-[#3F3122]' to={'/'}><IoHome /></Link>
            </div>
        </nav>
    )
}

export default NavBar
