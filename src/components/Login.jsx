import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosHome } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";



const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [emailError, setEmailError] = useState();
    const [passwordError, setPasswordError] = useState();

    /////// input side ////////////////
    const ValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email)
    };
    const handleSubmint = (e) => {
        e.preventDefault();
        let isValid = true;

        if (!ValidEmail(email)) {
            setEmailError('plz correct email address');
            isValid = false;
        } else {
            setEmailError('')
        };

        if (password.length < 6) {
            setPasswordError('give 6 or more character');
            isValid = false;
        } else {
            setPasswordError('');
        };
    };
    ////////////////////////////

    ///// password show ////////////////////////
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordshow = () => {
        setShowPassword((previousState) => !previousState);
    };
    //////////////////////////////////

    //// usenavigate//////////////////////////////////
    const Navigate = useNavigate();

    const clickRegister = () => {
        Navigate('/register');
    };

    const ClickRest = () => {
        Navigate('/resetPassword'); 
    };
    ////////////////////////////////////////

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-400">
            <div className="bg-white p-8 rounded shadow-md w-[500px]">
                <div className="flex justify-center mb-2">
                    <div className="flex items-center flex-col">
                        <IoIosHome className='text-[30px]' />
                        <h2 className="text-2xl font-semibold">Welcome To Bazaar</h2>
                    </div>
                </div>
                <form onSubmit={handleSubmint}>
                    <label htmlFor="emailOrPhone" className="block mb-2">
                        Email or Phone Number
                    </label>
                    <div className=' border-gray-300 rounded  border hover:border-black hover:border mb-2'>
                        <input
                            type="text"
                            id="emailOrPhone"
                            placeholder="example@mail.com"
                            className="h-[50px] w-full  px-3 focus:outline-none"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {emailError && <p className='text-red-500 text-sm'>{emailError}</p>}
                    <label htmlFor="password" className="block mb-2">
                        Password
                    </label>
                    <div className='flex items-center border border-gray-300 rounded hover:border-black hover:border mb-2'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            placeholder="*******"
                            className="h-[50px] w-full  px-3 focus:outline-none "
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div onClick={togglePasswordshow} className='me-3 cursor-pointer text-[20px]' >
                            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                        </div>
                    </div>
                    {passwordError && <p className='text-red-500 text-sm '>{passwordError}</p>}

                    <button className='btn '> Login</button>
                </form>

                <br />
                <div className='items-center flex justify-center mb-4'>or</div>
                <button className='btn flex items-center gap-2 justify-center text-[#3B5998]'> <IoLogoFacebook className='text-[25px]' />
                    Continue With Facebook</button>
                <button className='btn flex justify-center gap-2 items-center'><FcGoogle className='text-[25px]' /> Continue With Google</button>
                <div className='text-center m-3 '> Don't have a accout? <u className='cursor-pointer' onClick={clickRegister}>Register</u></div>
                <button className='h-[50px] w-full  m-2 bg-gray-200 '>
                    Forgot your password? <span className='cursor-pointer'onClick={ClickRest}><u>Reset it</u></span></button>
            </div>
        </div>
    );
};

export default Login;
