import React from 'react'
import { Check, ShoppingCart, Star } from 'lucide-react'
import AddToCartBtn from './AddToCartBtn'
import { isDiscountActive, getDiscountedFee } from '../../utils/discount'

const TeacherCard = ({id, teachers, selectedCurricullum, selectedSubject, confirmation, setConfirmation, cart, setCart }) => {
    const originalFee = teachers.pricing[selectedCurricullum]?.monthlyFee ?? 0
    const discountedFee = getDiscountedFee(originalFee)
    const discountActive = isDiscountActive()

    return (
        <div 
        style={{ animationDelay: `${id * 100}ms` }}
        className='h-full animate-slideUp animate-slideRight rounded-4xl flex flex-col border border-white/12 transition-all duration-300 ease-in-out hover:border-[#D4AF37] hover:scale-103 '>
            <div id='Teacherimage' className='relative rounded-t-4xl lg:h-80 max-lg:h-120 overflow-hidden'>
                <img src={teachers.image} alt="" className='w-full h-full object-cover' />
                <div className="absolute inset-0 bg-linear-to-t from-[#080c12] via-transparent to-transparent" />
                <div className='absolute top-3 right-3 bg-[#111]/50 backdrop-blur-3xl rounded-2xl px-3 py-2'>
                    <h1 className='flex text-[#D4AF37] font-semibold text-sm '>
                        <Star className='text-[#D4AF37]' fill='#D4AF37' size={16} />
                        {teachers.rating}
                        <span className='text-white ml-1'>
                            ({teachers.totalReviews})
                        </span>
                    </h1>
                </div>
            </div>
            <div className='bg-linear-to-t from-[#102233] to-[#0A1016] backdrop-blur-3xl rounded-b-4xl px-3 sm:px-15 md:px-6 lg:px-8 py-5 flex flex-col gap-3'>
                <h1 className='text-2xl font-semibold text-white/95'>{teachers.name}</h1>
                <h4 className='text-sm font-semibold text-[#D4AF37]'>{teachers.subject}</h4>
                <div className='flex flex-wrap gap-3 '>
                    {teachers.levels.filter((lvl) => lvl !== "All").map((lvl, idx) => (
                        <p className='max-sm:text-xs text-sm text-[#d4af37] border border-[#d4af37] rounded-full py-0.5 px-2 bg-[#201902]/50 whitespace-nowrap' key={idx}>{lvl}</p>
                    ))}
                </div>
                <div className='flex justify-between bg-gray-400/10 rounded-4xl max-lg:px-6 px-8 py-4 border border-white/12 '>
                    <div className='flex flex-col'>
                        <h2 className='uppercase text-sm text-mist-400'>Monthly</h2>
                        <div className='flex flex-col items-center'>
                            {discountActive && (
                                <span className='text-sm text-red-500 line-through'>Rs. {originalFee}</span>
                            )}
                            <h1 className='text-xl text-[#d4af37] font-semibold'>Rs. {discountedFee}</h1>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='uppercase text-sm text-mist-400'>Schedule</h2>
                        <h1 className='text-sm text-gray-200 font-semibold'>{teachers.pricing[selectedCurricullum]?.schedule.days ?? '-'}</h1>
                        <h1 className='text-sm text-gray-200 font-semibold'>{teachers.pricing[selectedCurricullum]?.schedule.time ?? '-'}</h1>
                    </div>
                </div>
                <div className='flex flex-col  '>
                    {teachers.features.map((pt, idx) => (
                        <h1 key={idx} className='flex items-center gap-1.5 text-gray-400'><span><Check size={15} absoluteStrokeWidth color='#D4AF37' /></span> {pt}</h1>
                    ))}
                </div>
                <AddToCartBtn teachers={teachers} confirmation={confirmation} setConfirmation={setConfirmation} cart={cart}
                    setCart={setCart} />
            </div>
        </div>
    )
}

export default TeacherCard