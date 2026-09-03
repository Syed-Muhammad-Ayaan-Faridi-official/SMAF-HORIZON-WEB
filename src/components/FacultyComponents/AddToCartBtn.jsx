import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { ShoppingCart } from 'lucide-react'
import Confirmation from './Confirmation'


const AddToCartBtn = ({ teachers, confirmation, setConfirmation, cart, setCart}) => {
    const [showConfirmation, setShowConfirmation] = useState(false)

    return (
        <div>
            <button
                onClick={() => { setShowConfirmation(true) }}
                className='flex gap-2 px-5 py-3 font-semibold bg-linear-to-r from-[#FFF3B0] via-[#D4AF37] to-[#8C6A00] text-gray-900 border-[#D4AF37] hover:shadow-2xl hover:shadow-[#D4AF37] transition-all duration-200 ease-in-out  rounded-full cursor-pointer'>
                <ShoppingCart />
                Add to Cart
            </button>

            {showConfirmation && (
                createPortal(
                    <Confirmation teachers={teachers} confirmation={confirmation} setConfirmation={setConfirmation} cart={cart} setCart={setCart}
                        onClose={() => {
                            setShowConfirmation(false)
                        }} />
                    ,
                    document.body
                )
            )}
        </div>
    )
}

export default AddToCartBtn