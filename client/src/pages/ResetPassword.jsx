import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AppContext } from '../context/AppContext';


const ResetPassword = () => {


    const { backendURL } = useContext(AppContext);
    axios.defaults.withCredentials = true;

    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [isEmailSent, setIsEmailSent] = useState('');
    const [otp, setIsOtp] = useState(0);
    const [isOtpSubmitted, setIsOtpSubmitted] = useState(false);
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

    const onSubmitEmail = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(backendURL + "api/auth/send-reset-otp", {
                email
            });
            if (response.status === 200) {
                toast.success("Reset OTP sent to your email");
                console.log("Reset OTP sent to email");
                setIsEmailSent(true);
            } else {
                console.log("Could not send reset OTP");
            }
        } catch (error) {
            console.log("Error in sending reset OTP: ", error);
        }
    }


    const onSubmitOtp = async (e) => {
        e.preventDefault();
        const otp = inputRefs.current.map(input => input.value).join('');
        setIsOtp(otp);
        setIsOtpSubmitted(true);
    }

    const onSubmitNewPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(backendURL + "api/auth/reset-password", {
                email,
                otp,
                newPassword
            });
            if (response.status === 200) {
                toast.success("Password reset successfully");
                console.log("Password reset successfully");
                navigate("/login");
            } else {
                console.log("Could not reset password");
            }
        } catch (error) {
            console.log("Error in resetting password: ", error);
        }
    }


    return (
        <div className='flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-200 to-purple-400'>
            <img onClick={() => navigate('/')} src={assets.logo} className='absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer' alt="" />
            {!isEmailSent && (
                <form onSubmit={onSubmitEmail} className='bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm' action="">
                    <h1 className='text-white text-2xl font-semibold text-center mb-4'>Reset Password</h1>
                    <p className='text-center mb-5 text-indigo-600'>Please enter your registerd email here.</p>
                    <div className='flex items-center gap-4 w-full px-5 py-2.4 rounded-full bg-[#333A5C] mb-6'>
                        <img className='w-3 h-9' src={assets.mail_icon} alt="" />
                        <input type="email" placeholder='Enter your email' className='bg-transparent outline-none border-none text-sm text-white placeholder:text-gray-400' value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className='flex justify-center'>
                        <button type='submit' className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full transition-all'>Send Reset Link</button>
                    </div>
                </form>
            )}

            {/* otp form */}
            {!isOtpSubmitted && isEmailSent && (

                <form onSubmit={onSubmitOtp} className='bg-slate-800 p-8 rounded-lg shadow-lg w-96 text-sm' action="">
                    <h1 className='text-white text-2xl font-semibold text-center mb-4'>Reset Password OTP</h1>
                    <p className='text-center mb-5 text-indigo-600'>Please enter the OTP sent to your email.</p>
                    <div className='flex justify-between mb-6' onPaste={handlePaste}>
                        {Array(6).fill(0).map((_, index) => (
                            <input key={index} className='w-12 h-12 bg-[#333A5C] text-center text-xl rounded-lg' type="text" maxLength={1} ref={e => inputRefs.current[index] = e} onInput={(e) => { handleInput(e, index) }}
                                onKeyDown={e => handleKeyDown(e, index)}
                            />
                        ))}


                    </div>
                    <button className='w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors'>Submit</button>
                </form>
            )}

            {/* Enter new passwod */}
            {isOtpSubmitted && isEmailSent && (

                <form onSubmit={onSubmitNewPassword} className='bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm' action="">
                    <h1 className='text-white text-2xl font-semibold text-center mb-4'>New Password</h1>
                    <p className='text-center mb-5 text-indigo-600'>Please enter the new password below.</p>
                    <div className='flex items-center gap-4 w-full px-5 py-2.4 rounded-full bg-[#333A5C] mb-6'>
                        <img className='w-3 h-9' src={assets.lock_icon} alt="" />
                        <input type="password" placeholder='Password' className='bg-transparent outline-none border-none text-sm text-white placeholder:text-gray-400' value={newPassword} onChange={e => setNewPassword(e.target.value)} />
                    </div>
                    <div className='flex justify-center'>
                        <button type='submit' className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full transition-all'>Send Reset Link</button>
                    </div>
                </form>
            )}


        </div>
    )
}

export default ResetPassword