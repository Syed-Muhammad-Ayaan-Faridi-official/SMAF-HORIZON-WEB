import React, { useEffect, useState } from 'react'
import { GraduationCap } from 'lucide-react'
import { getDiscountedFee } from '../../utils/discount'

const Confirmation = ({ onClose, teachers, confirmation, setConfirmation, cart, setCart }) => {

    const isLevelInCart = (lvl) =>
        cart.some((item) => item.subject === teachers.subject && item.level === lvl)

    const isConfirmationValid = confirmation && !isLevelInCart(confirmation)

    return (
        <div className='fixed inset-0 z-999 w-full h-full backdrop-blur-3xl bg-black/30 flex justify-center items-center'>
            <div className='absolute w-75 sm:w-135 h-fit bg-linear-to-br from-[#102233] to-[#0A1016] rounded-4xl flex  flex-col max-sm:px-2 px-10 justify-center items-center py-5 gap-5'>
                <div className='w-full flex flex-col gap-1 pt-2'>
                    <h1 className='text-white text-3xl max-sm:text-2xl font-bold'>Choose Your Curricullum</h1>
                    <h3 className='text-gray-400 text-sm'>Select the curriculum you are currently studying to enroll in the correct batch</h3>
                </div>
                <div className='flex flex-wrap w-full h-full py-1.5 gap-3 max-sm:gap-1 justify-center items-center '>
                    {teachers.levels.filter((lvl) => lvl !== "All").map((lvl, index) => {
                        const isAlreadyInCart = isLevelInCart(lvl)
                        return (
                            <div
                                key={index}
                                onClick={() => {
                                    if (isAlreadyInCart) return
                                    setConfirmation(lvl)
                                }}
                                className={`max-sm:w-full sm:w-[45%] 
                                flex 
                                gap-3 
                                items-center 
                                px-4 py-2 
                                ${isAlreadyInCart
                                    ? 'border border-white/10 opacity-40 cursor-not-allowed pointer-events-none'
                                    : confirmation === lvl
                                        ? 'border border-[#D4AF37]/80 text-[#D4Af37] shadow-lg shadow-[#D4AF37]/30'
                                        : 'border border-white/12 group hover:border-[#D4AF37]/40'}
                                rounded-4xl 
                                bg-linear-to-r from-white/10 via-[#102233] to-[#050E1A] 
                                cursor-pointer`}
                            >
                                <div className={`bg-[#010f379f] backdrop-blur-3xl shadow shadow-gray-900 p-2 rounded-xl border
                                    ${confirmation === lvl ? 'border-[#D4AF37]/40' : 'border-white/10'} group-hover:border-[#D4AF37]/40`}>
                                    <GraduationCap className={`
                                        ${confirmation === lvl ? 'text-[#D4AF37]' : 'group-hover:text-[#D4AF37] text-white/70'}
                                        `} />
                                </div>
                                <div>
                                    <h1 className='text-xl font-bold text-white/80'>
                                        {lvl}
                                    </h1>
                                    <h2 className='text-xs font-semibold text-gray-400'>
                                        {teachers.subject}
                                    </h2>
                                    {isAlreadyInCart && (
                                        <h2 className='text-[10px] font-semibold text-[#D4AF37]/70'>
                                            Already in cart
                                        </h2>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='flex max-sm:flex-col max-sm:px-2 px-10  w-full justify-center gap-4'>
                    <button
                        onClick={onClose}
                        className='px-6 py-1.5 sm:w-full text-md font-semibold transition-all duration-300 ease-in-out cursor-pointer rounded-xl bg-transparent border border-white/20 text-gray-400 hover:text-red-600 hover:border-red-500'>
                        Close
                    </button>
                    <button
                        disabled={!isConfirmationValid}
                        onClick={(e) => {
                            if (!isConfirmationValid) return

                            const final = {
                                teacherName: teachers.name,
                                level: confirmation,
                                fee: teachers.pricing[confirmation].monthlyFee,
                                discountedFee: getDiscountedFee(teachers.pricing[confirmation].monthlyFee),
                                subject: teachers.subject
                            }
                            setCart([...cart, final]);

                            alert("Sucessfully added to Cart");
                            onClose();
                        }}
                        className={`px-6 py-1.5 sm:w-full text-md font-semibold border transition-all duration-300 ease-in-out rounded-xl
                            ${isConfirmationValid
                                ? 'bg-linear-to-r from-[#FFF3B0] via-[#D4AF37] to-[#8C6A00] text-gray-900 border-[#D4AF37] hover:shadow-xl hover:shadow-[#D4AF37]/20 cursor-pointer'
                                : 'bg-white/5 text-gray-500 border-white/10 cursor-not-allowed'}`}>
                        Continue
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Confirmation