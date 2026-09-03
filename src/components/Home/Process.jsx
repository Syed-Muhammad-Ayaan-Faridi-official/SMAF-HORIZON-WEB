import React from 'react'
import Timeline from '../Process/Timeline';
import Header from '../Process/Header';

const Process = () => {
    return (
        <div id='Process' className='h-355 bg-linear-to-t from-[#000000] to-[#152331] max-md:px-5 md:px-9 max-sm:pt-10 pt-15 pb-10'>
            <Header />
            <Timeline />
        </div>
    )
}

export default Process