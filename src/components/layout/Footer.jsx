import React from 'react'
import logo from '../../assets/images/Official-Logo.webp'
import { RiInstagramLine, RiFacebookFill, RiWhatsappFill } from '@remixicon/react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
    return (
        <div className='flex flex-col rounded-t-4xl bg-[#08121c] gap-5  border-t border-gray-700 py-5 px-8'>
            <div
                className='w-full h-full gap-8 pb-4 border-b border-gray-700 flex max-md:flex-col max-md:gap-10'>
                <div className='w-full md:w-[30%] h-full flex flex-col pt-10 items-center p-4 '>
                    <img src={logo} alt="" className='h-20 w-50' />
                    <h1 className='text-gray-500 text-sm text-center max-sm:text-sm  '>Empowering O/A Level students with data backed performance tracking, and personalized support for academic excellence.</h1>
                    <div className='flex justify-center w-full gap-2 mt-2.5'>
                        <RiInstagramLine size={36} color='white' className='bg-[linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)] rounded-md cursor-pointer' />
                        <RiFacebookFill size={36} color='white' className='bg-[#0081FF] p-1 rounded-md cursor-pointer' />
                        <RiWhatsappFill size={36} color='#00C728' className='bg-white rounded-md cursor-pointer' />
                    </div>
                </div>
                <div className='flex flex-col w-full md:pt-15 md:w-[20%]  items-center  gap-2.5'>
                    <h1 className='text-xl font-semibold text-gray-200'>Quick Links</h1>
                    <ul className='decoration-none text-gray-300 flex flex-col items-center gap-1'>
                        <NavLink to={"/"}>
                            <li className='cursor-pointer hover:text-yellow-500 font-semibold'>Home</li>
                        </NavLink>
                        <li className='cursor-pointer hover:text-yellow-500 font-semibold'><a href="#why-section">Why Us</a></li>
                        <NavLink to={"/faculty"}>
                            <li className='cursor-pointer hover:text-yellow-500 font-semibold'>Faculty</li>
                        </NavLink>
                        <NavLink to={"/#Process"}>
                            <li className='cursor-pointer hover:text-yellow-500 font-semibold'>Process</li>
                        </NavLink>
                        <NavLink to={"/#faqs"}>
                            <li className='cursor-pointer hover:text-yellow-500 font-semibold'>FAQs</li>
                        </NavLink>
                    </ul>
                </div>
                <div className='flex flex-col w-full md:pt-15 md:w-[25%]  items-center  gap-2.5'>
                    <h1 className='text-xl font-semibold text-gray-200'>Level of Studies</h1>
                    <ul className='decoration-none text-gray-300 flex flex-col items-center gap-1'>
                        <NavLink to={"/faculty"}>
                            <li className='cursor-pointer hover:text-yellow-500 font-semibold'>O Levels</li>
                        </NavLink>
                        <NavLink to={"/faculty"}>
                            <li className='cursor-pointer hover:text-yellow-500 font-semibold'>IGCSE</li>
                        </NavLink>
                        <NavLink to={"/faculty"}>
                            <li className='cursor-pointer hover:text-yellow-500 font-semibold'>AS Level</li>
                        </NavLink>
                        <NavLink to={"/faculty"}>
                            <li className='cursor-pointer hover:text-yellow-500 font-semibold'>A2 Level</li>
                        </NavLink>
                    </ul>
                </div>
                <div className='flex flex-col w-full md:pt-15 md:w-[25%]  items-center  gap-2.5'>
                    <h1 className='text-xl font-semibold text-gray-200'>Legal Links</h1>
                    <ul className='decoration-none text-gray-300 flex flex-col items-center gap-1'>
                        <NavLink to={"/privacypolicy"}>
                            <li className='cursor-pointer hover:text-yellow-500 font-semibold'>Privacy Policy</li>
                        </NavLink>
                        <NavLink to={"/termsNcondition"}>
                            <li className='cursor-pointer hover:text-yellow-500 font-semibold'>Terms & Conditions</li>
                        </NavLink>
                        <NavLink to={"/notfound"}>
                            <li className='cursor-pointer hover:text-yellow-500 font-semibold'>Page Not Found</li>
                        </NavLink>
                    </ul>
                </div>
            </div>
            <div className='w-full flex max-sm:flex-col max-sm:gap-1 items-center justify-between'>
                <h1 className='text-[#956912] text-xs'>©2026 SMAF Horizon Online Academy</h1>
                <h1 className='text-[#956912] text-xs'>All Rights Reserved</h1>
                <h1 className='text-[#956912] text-xs'>Powered by Ayaan Tech Solutions</h1>
            </div>
        </div>
    )
}

export default Footer