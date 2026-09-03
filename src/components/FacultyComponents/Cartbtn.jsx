import { ShoppingCart } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom';
import ShowCart from './ShowCart';

const Cartbtn = ({ cart, setCart }) => {
    const [showcart, setShowCart] = useState(false)
    const [items, setItems] = useState(0);
    useEffect(() => {
        setItems(cart.length)
    }, [cart])

    return (
        <div
            onClick={() => {
                setShowCart(true)
            }}
            className='sticky w-fit top-22 max-md:top-17 left-full mr-2 lg:mr-6 z-100 rounded-4xl border border-white/30 hover:border-[#D4AF37] flex gap-2 text-white hover:text-[#D4AF37] bg-linear-to-tl from-[#0A1722]/40 to-[#17242E] backdrop-blur-lg px-3 py-2 items-center transition-all duration-300 ease-in-out hover:-translate-y-0.5 cursor-pointer'>
            <button
                className='rounded-4xl flex gap-2 bg-transparent items-center cursor-pointer'>
                <ShoppingCart color='#D4AF37' />
                <h1 className='text-lg font-semibold max-lg:hidden'>Cart</h1>
                <div className='h-5 w-5 p-1 rounded-full text-sm font-semibold bg-amber-200 flex items-center justify-center text-black'>{items}</div>
            </button>

            {showcart && (
                createPortal(
                    <ShowCart cart={cart} setCart={setCart}
                        onClose={() => {
                            setShowCart(false)
                        }}
                    />,
                    document.body
                ))}
        </div>
    )
}

export default Cartbtn