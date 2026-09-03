import React from 'react'

const FilterBtns = ({text, index, selected, setSelected}) => {
    return (
        <div 
        onClick={(e)=>{
            setSelected(text)
        }}
        className={`
            flex
            items-center
            border
            ${
                    selected === text
                        ? 'bg-linear-to-r from-[#FFF3B0] via-[#D4AF37] to-[#8C6A00] text-gray-800 border-[#D4AF37]'
                        : 'bg-linear-to-br from-white/20 via-[#1A2330] to-[#121A24] border-white/12 hover:border-[#D4AF37] hover:text-[#E6C875] text-white'
            }
            px-6 py-2 
            rounded-full  
            cursor-pointer 
            `}
        >

            <h1 className='text-lg font-semibold whitespace-nowrap'>{text}</h1>
        
        </div>
    )
}

export default FilterBtns