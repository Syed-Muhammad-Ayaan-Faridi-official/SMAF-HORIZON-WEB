import React from 'react'
import { Trash2 } from 'lucide-react'
import { isDiscountActive } from '../../utils/discount'

const CartCard = ({id, Teacher, cart, setCart}) => {
    const discountActive = isDiscountActive()

    const removefromCart = ()=>{
        setCart(cart.filter((_,i) => i !== id))
    }
    return (
        <div className='w-full px-5 py-3 max-sm:p-3 rounded-3xl border border-[#d4af37]/50 shadow-lg shadow-gray-800 flex justify-between'>
            <div className='flex flex-col'>
                <h1 className='text-xl font-semibold'>{Teacher.teacherName}</h1>
                <h3 className='text-lg text-[#d4af37] font-semibold'>{Teacher.subject}</h3>
                <h4 className='text-sm text-gray-300'>{Teacher.level}</h4>
                <div className='flex items-center gap-2'>
                    {discountActive && (
                        <span className='text-sm text-gray-500 line-through'>Rs. {Teacher.fee}</span>
                    )}
                    <h2 className='text-[#d4af37] font-bold'>Rs. {discountActive ? Teacher.discountedFee : Teacher.fee}</h2>
                </div>
            </div>
            <div className='cursor-pointer flex items-end '>
                <Trash2 className='hover:text-red-500' onClick={removefromCart}/>
            </div>
        </div>
    )
}

export default CartCard