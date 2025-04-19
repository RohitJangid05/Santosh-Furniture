import React from 'react'
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { IoHome } from "react-icons/io5";

const NavBar = () => {
    return (
        <nav className=' w-full flex justify-between items-center px-5 py-3 shadow-sm bg-white z-10'>
            <Link to="/"><img className='w-15' src={assets.logo} alt="Logo" /></Link>
            <Link className='text-4xl font-bold text-[#3F3122]' to={'/'}><IoHome /></Link>
        </nav>
    )
}

export default NavBar
