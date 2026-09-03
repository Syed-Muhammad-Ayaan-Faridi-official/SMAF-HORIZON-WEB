import { Trash2, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'
import CartCard from './CartCard'
import { isDiscountActive } from '../../utils/discount'

const ShowCart = ({ cart, setCart, onClose }) => {
    const navigate = useNavigate();
    const numItems = cart.length

    const calculateTotalFee = (cart) => {
        let total = 0;
        for (let index = 0; index < numItems; index++) {
            total = total + cart[index].fee;
        }
        return total
    }

    const calculateSeasonalDiscount = (cart) => {
        let discount = 0;
        for (let index = 0; index < numItems; index++) {
            discount = discount + (cart[index].fee - cart[index].discountedFee);
        }
        return discount
    }

    const calculateQuantityDiscount = () => {
        const numItem = cart.length;
        let discount = 0;
        if (numItem < 3) {
            discount = numItem * 500;
        } else if (numItem >= 3 && numItem <= 4) {
            discount = numItem * 1000;
        } else if (numItem >= 5 && numItem <= 8) {
            discount = numItem * 1500;
        }
        return discount
    }

    const calculateDiscount = (cart) => {
        if (isDiscountActive()) {
            return calculateSeasonalDiscount(cart);
        }
        return calculateQuantityDiscount();
    }

    const calculateNetTotal = (cart) => {
        let netTotal = calculateTotalFee(cart) - calculateDiscount(cart);
        return netTotal;
    }

    return (
        <div className='fixed inset-0 z-999 w-full h-full backdrop-blur-3xl bg-black/30 flex justify-end items-center'>
            <div className='h-full w-[60%] max-[500px]:w-[80%] sm:w-[65%] lg:w-100 py-2.5 px-4 bg-linear-to-br from-[#102233] to-[#0A1016] rounded-l-4xl flex flex-col gap-4 text-white border border-white/12 hover:border-[#d4af37]/50'>
                <div className='flex w-full justify-between items-center border-b border-b-white/50 py-3'>
                    <h1 className='font-bold text-xl'>Your Cart ({numItems})</h1>
                    <button className='cursor-pointer'
                        onClick={(e) => {
                            e.stopPropagation()
                            onClose()
                        }}
                    >
                        <X />
                    </button>
                </div>
                <div className='w-full h-[60%] flex flex-col gap-2.5 items-center overflow-y-auto transition-all duration-300 ease-in-out'>
                    {numItems < 1 ? (<h1 className='text-xl text-white font-semibold'>Empty Cart</h1>) :
                        (cart.map((Teacher,index) =>(
                            <CartCard key={index} id={index} Teacher={Teacher} cart={cart} setCart={setCart} />
                        )))
                    }
                </div>
                <div className='w-full flex flex-col gap-3 '>
                    <div className='flex flex-col gap-3'>
                        <div className='flex justify-between'>
                            <h3 className='text-gray-300 font-semibold'>Total Fee</h3>
                            <h3 className='text-gray-300 font-semibold'>{calculateTotalFee(cart)}</h3>
                        </div>
                        <div className='flex justify-between border-b border-b-gray-400 pb-1.5'>
                            <h3 className='text-gray-300 font-semibold'>Total Discount</h3>
                            <h3 className='text-gray-300 font-semibold'>-{calculateDiscount(cart)}</h3>
                        </div>
                        <div className='flex justify-between'>
                            <h3 className='text-gray-300 font-semibold'>Amount Payable</h3>
                            <h3 className='text-gray-300 font-semibold'>{calculateNetTotal(cart)}</h3>
                        </div>
                    </div>
                    <button className='w-full py-2.5 text-md font-semibold bg-linear-to-r from-[#FFF3B0] via-[#D4AF37] to-[#8C6A00] text-gray-900 border border-[#D4AF37] hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer rounded-4xl' onClick={() => navigate('/checkout')} >Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default ShowCart