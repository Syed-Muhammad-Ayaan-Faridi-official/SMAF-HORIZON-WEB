import React from 'react'
import RegisterForm from '../components/Register/RegisterForm.jsx'
import LeftContent from '../components/Register/LeftContent.jsx'
import FormHeaderTxt from '../components/Register/FormHeaderTxt.jsx'

const Register = () => {
    return (
        <div className='max-sm:min-h-screen md:h-screen bg-black overflow-hidden flex max-md:flex-col items-center p-2 lg:p-3 gap-5'>
            <LeftContent /> 
            <div className='text-white w-full md:w-[50%] lg:w-[55%] max-sm:h-130 h-full flex flex-col items-center max-sm:p-2 md:p-3 gap-5 md:gap-2'>
                <FormHeaderTxt /> 
                <RegisterForm />
            </div>
        </div>
    )
}

export default Register