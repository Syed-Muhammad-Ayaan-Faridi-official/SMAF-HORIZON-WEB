import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../../assets/images/Official-Logo.webp'

const navLinkClass = ({ isActive }) =>
    `text-lg 2xl:text-2xl transition-colors ${isActive ? 'text-[#d4af37] font-semibold' : 'text-gray-300 hover:text-[#d4af37]'
    }`

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className='sticky top-1 md:top-2 z-50 mx-2 lg:mx-6 '>
            <div className='bg-[#0E1117]/70 backdrop-blur-2xl rounded-2xl border border-gray-800 shadow-md shadow-[#152331] flex items-center justify-between max-md:pr-2.5 pr-2 md:py-1'>
                <Link to="/" onClick={() => setIsOpen(false)}>
                    <img src={logo} alt=""
                        className='w-30 h-13 2xl:w-50 2xl:h-20'
                    />
                </Link>

                <button
                    className='md:hidden'
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <X className='text-gray-300' />
                    ) : (
                        <Menu className='text-gray-300' />
                    )}
                </button>

                <div className='max-md:hidden flex md:gap-5 lg:gap-8 items-center'>
                    <nav className='flex gap-2.5'>
                        <NavLink to="/" end className={navLinkClass}>Home</NavLink>
                        <NavLink to="/faculty" className={navLinkClass}>Faculty</NavLink>
                        <NavLink to={"/#why-section"} className='text-lg 2xl:text-2xl transition-colors text-gray-300 hover:text-[#d4af37]'>Why</NavLink>
                        <NavLink to={"/#Process"} className='text-lg 2xl:text-2xl transition-colors text-gray-300 hover:text-[#d4af37]'>Process</NavLink>
                        <NavLink to={"/contact-us"} className='text-lg 2xl:text-2xl transition-colors text-gray-300 hover:text-[#d4af37]'>Contact</NavLink>
                        <NavLink to={"/#faqs"} className='text-lg 2xl:text-2xl transition-colors text-gray-300 hover:text-[#d4af37]'>FAQs</NavLink>
                    </nav>
                    <div className='flex gap-2.5'>
                        <button
                            onClick={() => {
                                window.location.href = "https://wa.me/923332622283";
                            }}
                            className='text-gray-900 border bg-linear-to-r from-[#FFF3B0] via-[#D4AF37] to-[#8C6A00] border-[#D4AF37]/60 px-4 py-2 rounded-lg font-semibold cursor-pointer transition-all duration-300 ease-in hover:scale-105 2xl:py-2.5 2xl:text-xl 2xl:rounded-xl'>Chat With Us
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className='bg-[#0E1117]/90 backdrop-blur-2xl rounded-2xl border border-gray-800 shadow-md shadow-[#152331] flex flex-col items-center gap-4 py-5'>
                    <NavLink to="/" end className={navLinkClass} onClick={() => setIsOpen(false)}>Home</NavLink>
                    <NavLink to="/faculty" className={navLinkClass} onClick={() => setIsOpen(false)}>Faculty</NavLink>
                    <NavLink to={"/#why-section"} className='text-lg 2xl:text-2xl transition-colors text-gray-300 hover:text-[#d4af37]'>Why</NavLink>
                    <NavLink to={"/#Process"} className='text-lg 2xl:text-2xl transition-colors text-gray-300 hover:text-[#d4af37]'>Process</NavLink>
                    <NavLink to={"/contact-us"} className='text-lg 2xl:text-2xl transition-colors text-gray-300 hover:text-[#d4af37]'>Contact</NavLink>
                    <NavLink to={"/#faqs"} className='text-lg 2xl:text-2xl transition-colors text-gray-300 hover:text-[#d4af37]'>FAQs</NavLink>
                    <button
                        onClick={() => {
                            window.location.href = "https://wa.me/923332622283";
                        }}
                        className='text-gray-900 border bg-linear-to-r from-[#FFF3B0] via-[#D4AF37] to-[#8C6A00] border-[#D4AF37]/60 px-4 py-2 rounded-md font-semibold cursor-pointer transition-all duration-300 ease-in hover:scale-105'>
                        Chat With Us
                    </button>
                </div>
            </div>
        </header >
    )
}

export default Navbar