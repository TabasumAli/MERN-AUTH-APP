import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';


const Navbar = () => {

    const logout = async () => {
        try {
            // Add logout functionality here
            console.log("Logging out...");
            axios.defaults.withCredentials = true;
            const response = await axios.post(backendURL + "api/auth/logout");
            if (response.status === 200) {
                setIsLoggedIn(false);
                setUserData(null);
                navigate("/");
            } else {
                console.log("Logout failed");
            }
        } catch (error) {
            console.log("Error during logout: ", error);
        }
    }

    const sendVerificationOtp = async () => {
        try {
            axios.defaults.withCredentials = true;
            const response = await axios.post(backendURL + "api/auth/send-verify-otp");
            if (response.status === 200) {
                navigate("/email-verify");
                toast.success("Verification OTP sent to your email");
            } else {
                toast.error("Could not send verification OTP");
            }
        } catch (error) {
            console.log("Error in sending verification OTP: ", error);
            toast.error("Could not send verification OTP");
        }
    }


    const navigate = useNavigate();
    const { backendURL, isLoggedIn, setIsLoggedIn, userData, setUserData, getUserData } = useContext(AppContext);
    return (
        <div className='w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 absolute top-0'>
            <img src={assets.logo} alt="App Logo" className='w-28 sm:w-32' />

            {userData ? <div className='w-8 h-8 flex justify-center items-center rounded-full bg-black text-white  relative group'> {userData.name[0].toUpperCase()}
                <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-10'>
                    <ul className='list-none m-0 p- bg-gray-100 text-sm'>
                        {!userData.isAccountVerified && <li onClick={sendVerificationOtp} className='py-1 px-2 hover:bg-gray-200 cursor-pointer'>Verify Email</li>}

                        <li className='py-1 pr-10 hover:bg-gray-200 cursor-pointer' onClick={logout}>Logout</li>
                    </ul>
                </div>
            </div> : (<button onClick={() => { navigate("/login") }} className='flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 text-gray-700 hover:bg-gray-200 tranition-all'>Login<img src={assets.arrow_icon} /></button>)}

        </div>
    )
}

export default Navbar