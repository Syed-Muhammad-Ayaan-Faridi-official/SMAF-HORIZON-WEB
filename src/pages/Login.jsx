import React, { useState } from 'react'
import Form from '../components/Login/Form'
import CornerCircle from '../components/Login/CornerCircle'
import TopRightCircle from '../components/Login/TopRightCircle'
import BackBtn from '../components/Login/BackBtn'

const Login = () => {
    return (
        <div className="relative w-full h-screen bg-[#0A0C11] overflow-hidden bg-linear-to-t from-[#152331] to-[#000000]">
            <TopRightCircle /> 
            <BackBtn />
            <Form />
            <CornerCircle />
        </div>
    )
}

export default Login