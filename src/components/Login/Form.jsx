import React, { useState } from 'react'
import { ChevronLeft, Sun } from 'lucide-react'

const Form = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('hello')
        setEmail('')
        setPassword('')
    }
    return (
        <div className='h-[90%] w-full flex flex-col items-center justify-center '>
            <form onSubmit={submitHandler} className='z-1 flex flex-col max-sm:w-[85%] w-sm h-[85%] max-h-125 rounded-2xl p-8 border border-yellow-300 gap-5 justify-center bg-[#13161E] backdrop-blur-3xl' >
                <div className='flex flex-col gap-1 justify-center items-center'>
                    <div className='p-4 bg-[#333] rounded-md'>
                        <Sun color='white' size={36} />
                    </div>
                    <h3 className='text-white/80 max-sm:text-xl text-3xl font-semibold max-sm:font-bold'>Yooo, welcome back!</h3>
                    <h5 className='text-zinc-600 text-xs'>First time here? <span className='text-white/80 text-sm max-sm:text-xs'>Sign up for free</span></h5>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-0.5'>
                        <label className='text-white/80 text-sm max-sm:text-xs'>Email Address</label>
                        <input type="email" id="" placeholder='Your Email' className='border border-gray-400 p-1.5 rounded-lg outline-none text-amber-200 caret-blue-400 placeholder:text-sm placeholder:text-gray-400 max-sm:placeholder:text-xs max-sm:text-sm'
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-white/80 text-sm max-sm:text-xs'>Password</label>
                        <input type="password" id="" placeholder='Enter Password' className='border border-gray-400 p-1.5 rounded-lg outline-none text-amber-200 caret-blue-400 placeholder:text-sm placeholder:text-gray-400  max-sm:placeholder:text-xs max-sm:text-sm'
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className='text-sm text-gray-500 flex gap-0.5 items-center'><span><input type="checkbox" className='cursor-pointer' /></span>Remember me</p>
                        <p className='text-xs text-gray-500 cursor-pointer'>Forget Password?</p>
                    </div>
                    <button type="submit" className='bg-[#222] text-white/80 rounded-md p-2 cursor-pointer font-semibold hover:bg-gray-200 hover:text-black' >Log in</button>
                </div>
            </form>
        </div>
    )
}

export default Form