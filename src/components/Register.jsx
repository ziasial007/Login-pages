import React, { useState } from 'react';
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const [terms, setTerms] = useState(false);
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [termsError, setTermsError] = useState('');
  

    const ValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let isvalid = true;

        if (!name || name.length < 1) {
            setNameError('Please fill in your name');
            isvalid = false;
        } else {
            setNameError('');
        }

        if (!ValidEmail(email)) {
            setEmailError('Please enter a valid email address');
            isvalid = false;
        } else {
            setEmailError('');
        }

        if (!password || password.length < 6) {
            setPasswordError('Password must be at least 6 characters');
            isvalid = false;
        } else {
            setPasswordError('');
        }

        if (password !== retypePassword) {
            setPasswordError('Passwords do not match');
            isvalid = false;
        }

        if (!terms) {
            setTermsError('Please agree to the terms and conditions');
            isvalid = false;
        } else {
            setTermsError('');
        }

        if (!isvalid) {
            return;
        }

        // Proceed with form submission (e.g., API call)
    };

     const Navigate = useNavigate();
    
        const handleClick = () => {
            Navigate('/')
        }


    return (
        <div className="flex justify-center bg-gray-300 min-h-screen">
            <div className='w-[500px] bg-white shadow-md rounded p-8'>
                <div className='flex justify-center flex-col items-center'>
                    <img src="" alt="Logo" />
                    <h1>Register page</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name" className='mb-2'>Full Name</label>
                    <div className='border border-gray-200 hover:border-black rounded'>
                        <input
                            type="text"
                            id="name"
                            placeholder='Enter Your Name'
                            className="w-full h-[50px] rounded border-none px-3 focus:outline focus:outline-red-600"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                        {nameError && <p className="text-red-500 text-sm">{nameError}</p>}

                    <label htmlFor="email" className='mt-4 mb-2'>Email or Phone Number</label>
                    <div className='border border-gray-200 hover:border-black rounded'>
                        <input
                            type="email"
                            id="email"
                            placeholder='example@mail.com'
                            className='w-full h-[50px] border-none focus:outline focus:outline-red-600 rounded px-3'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                        {emailError && <p className="text-red-900 text-sm ">{emailError}</p>}

                    <label htmlFor="password" className='mt-4 mb-2'>Password</label>
                    <div className="border flex items-center border-gray-200 rounded focus-within:border-red-600">
                        <input
                            type="password"
                            id="password"
                            placeholder="*********"
                            className="w-full h-[50px] px-3 border-none focus:outline-none rounded"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="mx-3">
                            <FaRegEyeSlash />
                        </div>
                    </div>
                    {passwordError && <p className="text-red-800 text-sm">{passwordError}</p>}

                    <label htmlFor="retypePassword" className='mt-4 mb-2'>Retype Password</label>
                    <div className="border flex items-center border-gray-200 rounded focus-within:border-red-600">
                        <input
                            type="password"
                            id="retypePassword"
                            placeholder="*********"
                            className="w-full h-[50px] px-3 border-none focus:outline-none rounded"
                            onChange={(e) => setRetypePassword(e.target.value)}
                        />
                        <div className="mx-3">
                            <FaRegEyeSlash />
                        </div>
                    </div>

                    <div className="flex gap-1.5 mt-4">
                        <input
                            type="checkbox"
                            className="cursor-pointer"
                            checked={terms}
                            onChange={(e) => setTerms(e.target.checked)}
                        />
                        <p>By signing up, you agree to
                            <span className="p-1 cursor-pointer m-3 border-b">Terms & Condition</span>
                        </p>
                    </div>
                    {termsError && <p className="text-red-500 text-sm">{termsError}</p>}

                    <div className="mt-4 mb-4">
                        <button type="submit" className="w-full cursor-pointer h-[50px] bg-blue-500 text-white rounded hover:bg-blue-600 font-bold">
                            Create An Account
                        </button>
                    </div>
                </form>

                <div className="flex justify-center m-4">or</div>
                <button className='w-full h-[50px] flex items-center gap-2 justify-center text-[#3B5998] border border-gray-300 rounded hover:bg-gray-100'>
                    <IoLogoFacebook className='text-[25px]' />
                    Continue With Facebook
                </button>
                <button className='w-full h-[50px] flex justify-center gap-2 items-center border border-gray-300 rounded hover:bg-gray-100 mt-2'>
                    <FcGoogle className='text-[25px]' />
                    Continue With Google
                </button>

                <div className='text-center m-3'>
                    Already have an account? <u className='cursor-pointer 'onClick={handleClick}>Login</u>
                </div>
            </div>
        </div>
    );
};

export default Register;