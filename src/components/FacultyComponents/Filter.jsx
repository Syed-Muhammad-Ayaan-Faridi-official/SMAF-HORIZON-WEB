import React from 'react'
import FilterBtns from './FilterBtns'

const Filter = ({ curricullum, subjects, selectedSubject, setSelectedSubject, selectedCurricullum, setSelectedCurricullum }) => {
    return (
        <div className='py-5 lg:py-5 lg:px-8 px-4 flex flex-col gap-6'>
            <div className='flex flex-col  gap-1.5'>
                <h1 className='text-sm text-[#B4B8C0] uppercase'>Curriculum</h1>
                <div className='flex overflow-auto gap-2'>
                    {curricullum.map((e, index) => (
                        <FilterBtns
                            key={index} 
                            text={e} 
                            index = {index}
                            selected={selectedCurricullum} 
                            setSelected={setSelectedCurricullum}
                        />
                    ))}
                </div>
                <br />
                <h1 className='text-sm text-[#B4B8C0] uppercase'>Subjects</h1>
                <div className='flex overflow-auto no-scrollbar gap-2'>
                    {subjects.map((e, index) => (
                        <FilterBtns 
                            key={index}
                            text={e} 
                            index = {index}
                            selected={selectedSubject}
                            setSelected={setSelectedSubject} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Filter