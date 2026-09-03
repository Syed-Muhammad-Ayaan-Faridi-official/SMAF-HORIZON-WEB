import React, { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import LimitedTime from '../../assets/images/LimitedTime.jpg'
import CounterCards from '../Cards/CounterCards'
const LimitedOffer = () => {
  const target = new Date("2026-09-10T23:59:59").getTime();
  const calculateCountDown = () => {
    const current = new Date().getTime();
    const diff = target - current;
    if (diff <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00"
      }
    }
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)).toString().padStart(2,"0"),
      hours: Math.floor((diff / (1000 * 60 * 60))%24).toString().padStart(2,"0"),
      minutes: Math.floor((diff / (1000 * 60 ))%60).toString().padStart(2,"0"),
      seconds:  Math.floor((diff / (1000))%60).toString().padStart(2,"0")
    }

  }
  const [timeLeft, settimeLeft] = useState(calculateCountDown())
  useEffect(() => {
    const timer = setInterval(() => {
      settimeLeft(calculateCountDown());
    }, 1000);

    return ()=> clearInterval(timer);
  }, [])
  


  return (
    <div className='w-full h-fit bg-linear-to-t from-[#000000]/ to-[#152331] max-md:px-2 md:px-9 py-5'>
      <div className='w-full h-full flex max-md:flex-col-reverse md:px-4 max-md:py-5 max-sm:px-1.5 items-center md:py-7 bg-linear-to-t from-[#0A1224] via-[#101A30] to-[#101218] border border-[#b5821d] rounded-4xl'>
        <div id='imageArea' className='w-[40%] max-sm:w-[90%] max-md:w-[80%] rounded-2xl hover:scale-95 transition duration-300 flex justify-center' >
          <img src={LimitedTime} alt="" className='2xl:w-full rounded-2xl object-cover overflow-hidden h-87' />
        </div>
        <div className='w-[60%] max-sm:w-[85%] max-md:w-[80%] h-full p-3 flex flex-col justify-center max-md:items-center gap-2.5'>
          <h1 className='font-semibold text-3xl 2xl:text-5xl text-[#FFC93C]'>Limited Time Offer!!!</h1>
          <h1 className='font-bold text-4xl 2xl:text-5xl text-[#FEFEFE]'>Avail More than <span className='text-[#ffa800]'>15% Discount</span> On All of Our Courses</h1>
          <div className='flex gap-2 max-[450px]:justify-center flex-wrap'>
            <CounterCards value={timeLeft.days} label={'Days'} />
            <CounterCards value={timeLeft.hours} label={'Hours'} />
            <CounterCards value={timeLeft.minutes} label={'Minutes'} />
            <CounterCards value={timeLeft.seconds} label={'Seconds'} />
          </div>
          <button className='w-fit 2xl:text-xl text-[#010613] border border-white/12 bg-linear-to-l from-[#E6C875] to-[#D4AF37] px-4 py-3 rounded-md font-bold cursor-pointer hover:scale-95 flex items-center gap-1 transition duration-300 shadow-md shadow-yellow-800'>Grab Yours Now <ArrowRight size={18} strokeWidth={3} /></button>
        </div>
      </div>
    </div>
  )
}

export default LimitedOffer