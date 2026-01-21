import React, { useContext, useEffect } from 'react'
import { assets } from '../assets/assets'
import App from '../App';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EmailVerify = () => {

    axios.defaults.withCredentials = true;
    const { backendURL,
        isLoggedIn,
        setIsLoggedIn,
        userData,
        setUserData,
        getUserData } = useContext(AppContext)

    const navigate = useNavigate();

    const inputRefs = React.useRef([]);
    const handleInput = (e, index) => {
        if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    }

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && e.target.value.length === 0 && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    }

    const handlePaste = (e) => {
        const pasteData = e.clipboardData.getData('Text');
        const pasteArray = pasteData.split('');
        pasteArray.forEach((char, index) => {
            if (inputRefs.current[index]) {
                inputRefs.current[index].value = char;
            }
        });
    };


    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const otp = inputRefs.current.map(input => input.value).join('');
        try {
            const response = await axios.post(backendURL + "api/auth/verify-account", {
                otp
            });
            if (response.status === 200) {
                console.log("Email verified successfully");
                toast.success("Email verified successfully");
                getUserData();
                navigate("/");
            } else {
                console.log("Email verification failed");
            }
        } catch (error) {
            console.log("Error in email verification: ", error);
        }
    }

    useEffect(() => {

        isLoggedIn && userData && userData.isAccountVerified && navigate("/");

    }, [isLoggedIn, userData]);

    return (
        <div className='flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-200 to-purple-400'>
            <img onClick={() => navigate('/')} src={assets.logo} className='absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer' alt="" />
            <form onSubmit={handleOnSubmit} className='bg-slate-800 p-8 rounded-lg shadow-lg w-96 text-sm' action="">
                <h1 className='text-white text-2xl font-semibold text-center mb-4'>Email Verify OTP</h1>
                <p className='text-center mb-5 text-indigo-600'>Please enter the OTP sent to your email.</p>
                <div className='flex justify-between mb-6' onPaste={handlePaste}>
                    {Array(6).fill(0).map((_, index) => (
                        <input key={index} className='w-12 h-12 bg-[#333A5C] text-center text-xl rounded-lg' type="text" maxLength={1} ref={e => inputRefs.current[index] = e} onInput={(e) => { handleInput(e, index) }}
                            onKeyDown={e => handleKeyDown(e, index)}
                        />
                    ))}


                </div>
                <button className='w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors'>Verify Email</button>
            </form>
        </div>
    )
}

export default EmailVerify