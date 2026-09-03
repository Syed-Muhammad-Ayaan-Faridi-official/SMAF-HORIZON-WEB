import React, { useEffect } from 'react'
import { Trash2 } from 'lucide-react'
import { isDiscountActive } from '../../utils/discount'

const CheckoutLeft = ({cart,removeFromCart,onConfirm,netFee,calculateDiscount,Totalfee}) => {
    const discountActive = isDiscountActive()

    return (
        <div className=' h-full max-md:h-fit w-full md:w-[50%] p-6 lg:p-8 border border-white/12 rounded-4xl bg-linear-to-b from-[#151C26] to-[#0F1F2F] flex flex-col gap-5 shadow-xl '>
            <div className='border-b border-white/30 pb-2'>
                <h1 className='text-white/80 text-xl lg:text-2xl font-semibold'>Enrollment Summary</h1>
            </div>
            <div className='h-70 no-scrollbar flex flex-col overflow-y-auto items-center border-b border-white/30 gap-2'>
                {cart.map((teacher, index) => (
                    <div key={index} className='w-full px-5 py-3 max-sm:p-3 rounded-3xl border border-[#d4af37]/50 shadow-lg shadow-gray-800 flex justify-between'>
                        <div className='flex flex-col'>
                            <h1 className='text-xl font-semibold text-gray-200'>{teacher.teacherName}</h1>
                            <h3 className='text-lg text-[#d4af37] font-semibold'>{teacher.subject}</h3>
                            <h4 className='text-sm text-gray-300'>{teacher.level}</h4>
                            <div className='flex items-center gap-2'>
                                {discountActive && (
                                    <span className='text-sm text-gray-500 line-through'>Rs. {teacher.fee}</span>
                                )}
                                <h2 className='text-[#d4af37] font-bold'>Rs. {discountActive ? teacher.discountedFee : teacher.fee}</h2>
                            </div>
                        </div>
                        <div className='cursor-pointer flex items-end '>
                            <Trash2 className='text-white/80 hover:text-red-500' onClick={() => removeFromCart(index)}/>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex flex-col gap-3'>
                <div className='flex justify-between'>
                    <h2 className='uppercase text-[#d4af37] font-semibold'>Subtotal</h2>
                    <h2 className='uppercase text-[#d4af37] font-semibold'>Rs. {Totalfee(cart)}</h2>
                </div>
                <div className='flex justify-between'>
                    <h2 className='uppercase text-[#d4af37] font-semibold'>Discount</h2>
                    <h2 className='uppercase text-[#d4af37] font-semibold'>-Rs. {calculateDiscount()}</h2>
                </div>
                <div className='flex justify-between'>
                    <h2 className='uppercase text-[#d4af37] font-semibold'>Registration Fee <span className='text-xs'>(One Time Payment Non-Refundable)</span></h2>
                    <h2 className='uppercase text-[#d4af37] font-semibold'>Rs. 1000</h2>
                </div>
            </div>
            <div>
                <div className='flex justify-between'>
                    <h1 className='uppercase text-[#d4af37] font-semibold'>Grand Total</h1>
                    <h1 className='uppercase text-[#d4af37] font-semibold'>Rs. {netFee()}</h1>
                </div>
            </div>
            <button className='w-full py-3.5 text-md font-semibold bg-linear-to-r from-[#FFF3B0] via-[#D4AF37] to-[#8C6A00] text-gray-900 border border-[#D4AF37] hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer rounded-4xl'
            onClick={onConfirm}
            >Confirm Registeration</button>
        </div>
    )
}

export default CheckoutLeft