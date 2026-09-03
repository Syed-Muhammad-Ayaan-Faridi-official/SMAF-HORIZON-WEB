import React, { useState } from 'react'

const RegisterForm = () => {
    const [name, setName] = useState('')
    const [phonenum, setPhoneNum] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({
        name: "",
        phonenum: "",
        email: "",
        password: "",
    });

    //Form Validation
    const validateForm = () => {
        const newErrors = {};

        // Name
        if (name.trim() === "") {
            newErrors.name = "Candidate name is required.";
        } else if (!/^[A-Za-z\s]{3,50}$/.test(name)) {
            newErrors.name = "Only letters and spaces are allowed.";
        }

        // Phone
        if (phonenum.trim() === "") {
            newErrors.phonenum = "WhatsApp number is required.";
        } else if (!/^(\+92|0)?3[0-9]{9}$/.test(phonenum)) {
            newErrors.phonenum = "Invalid Pakistani phone number.";
        }

        // Email
        if (email.trim() === "") {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Invalid email address.";
        }

        // Password
        if (password.trim() === "") {
            newErrors.password = "Password is required.";
        } else if (password.length < 8) {
            newErrors.password = "Password must be at least 8 characters.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    //Submit Handler
    const submitHandler = (e) => {
        e.preventDefault()

        if (!validateForm()) {
            return;
        }
        alert("Registration Successful!");

        setName('')
        setPhoneNum('')
        setEmail('')
        setPassword('')
        setErrors({});

    }
    return (
        <form onSubmit={submitHandler}
            className='w-full sm:w-[90%] lg:w-[80%] h-full p-1.5 flex flex-col gap-3 items-center'>
            <div className='w-full flex flex-col gap-0.5'>
                <label className='max-sm:text-xs text-gray-300' >Candidate Name</label>
                <input required type="text" placeholder='eg. Muhammad Ayaan'
                    className='p-2 border border-gray-400 rounded-lg placeholder:text-sm outline-none'
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                />
                {errors.name && (
                    <p className="text-red-500 text-xs">
                        {errors.name}
                    </p>
                )}
            </div>
            <div className='w-full flex flex-col gap-0.5'>
                <label className='max-sm:text-xs text-gray-300'>WhatsApp Number</label>
                <input required type="text" placeholder='eg. +92-1234567890'
                    className='p-2 border border-gray-400 rounded-lg placeholder:text-sm outline-none'
                    value={phonenum}
                    onChange={(e) => {
                        setPhoneNum(e.target.value)
                    }}
                />
                {errors.phonenum && (
                    <p className="text-red-500 text-xs">
                        {errors.phonenum}
                    </p>
                )}
            </div>
            <div className='w-full flex flex-col gap-0.5'>
                <label className='max-sm:text-xs text-gray-300'>Email Address</label>
                <input required type="email" placeholder='eg. ayaan@example.com'
                    className='p-2 border border-gray-400 rounded-lg placeholder:text-sm outline-none'
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
                {errors.email && (
                    <p className="text-red-500 text-xs">
                        {errors.email}
                    </p>
                )}
            </div>
            <div className='w-full flex flex-col gap-0.5'>
                <label className='max-sm:text-xs text-gray-300'>Set Password</label>
                <input required type="password" placeholder='Enter your Password'
                    className='p-2 border border-gray-400 rounded-lg placeholder:text-sm outline-none'
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
                {errors.password && (
                    <p className="text-red-500 text-xs">
                        {errors.password}
                    </p>
                )}
            </div>
            <button type="submit" className='w-full p-2 rounded-lg bg-white text-black font-semibold active:scale-95'>Create Account</button>
            <button className='w-full p-2 rounded-lg bg-[#222] text-white font-semibold active:scale-95'>Back</button>
            <h4 className='text-gray-400 text-xs'>Already have an account? <span className='cursor-pointer text-white font-semibold'>Log in</span></h4>
        </form>
    )
}

export default RegisterForm