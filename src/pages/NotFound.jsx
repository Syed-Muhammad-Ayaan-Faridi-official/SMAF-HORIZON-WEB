import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='min-h-screen h-full flex flex-col justify-between'>
        <Navbar/>
        <div className='flex flex-col justify-center items-center py-30 gap-2.5'>
            <h1 className='font-extrabold bg-linear-to-b from-[#FFF3B0] via-[#D4AF37] to-[#8C6A00] border-[#D4AF37] bg-clip-text text-transparent text-9xl'>404</h1>
            <h2 className='text-xl text-gray-600 font-bold '>Opps!! Page Not Found</h2>
            <h4 className='text-sm sm:text-lg text-gray-400 text-center  w-65 sm:w-full'>Page you are looking doesn't exist or has been moved.</h4>
            <NavLink to={"/"}>
            <button className='text-md text-gray-900 hover:bg-linear-to-b from-[#FFF3B0] via-[#D4AF37] to-[#8C6A00] hover:bg-clip-text hover:text-transparent font-bold bg-linear-to-r from-[#FFF3B0] via-[#D4AF37] to-[#8C6A00] hover:bg-gray-900 border border-[#D4AF37] shadow-lg shadow-gray-600 rounded-full px-5 py-2.5 cursor-pointer transition-all duration-300 ease-in-out'>Back to HomePage</button>
            </NavLink>
        </div>
        <Footer/>
    </div>
  )
}

export default NotFound