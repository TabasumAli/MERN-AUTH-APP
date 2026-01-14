import React, { useState } from 'react'
import { assets } from '../assets/assets';

const Login = () => {

    const [state, setState] = useState("Sign up");
    return (
        <div className='flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-200 to-purple-400'>
            <img src={assets.logo} className='absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor pointer' alt="" />
            <div className='bg-slate-900 p-4 rounded-lg shadow-lg w-full sm:w-96 text-indigo-300 text-sm'>
                <h2 className='text-3xl font-semibold text-white text-center mb-3'>{state === "Sign up" ? "Sign up" : "Login"}</h2>
                <p className='text-center mb-5 text-sm'>{state === "Sign up" ? "Create a new account" : "Login to your existing account"}</p>

                <form action="">
                    {state === "Sign up" && (<div className='flex items-center mb-4 w-full gap-4 px-5 py-2.5 rounded-full bg-[#333A5C]'>
                        <img src={assets.person_icon} alt="" />
                        <input className='bg-transparent outline-none' type="text" placeholder='Full Name' required />
                    </div>)}


                    <div className='flex items-center mb-4 w-full gap-4 px-5 py-2.5 rounded-full bg-[#333A5C]'>
                        <img src={assets.mail_icon} alt="" />
                        <input className='bg-transparent outline-none' type="email" placeholder='Email' required />
                    </div>

                    <div className='flex items-center mb-4 w-full gap-4 px-5 py-2.5 rounded-full bg-[#333A5C]'>
                        <img src={assets.lock_icon} alt="" />
                        <input className='bg-transparent outline-none' type="password" placeholder='Password' required />
                    </div>

                    <p className='text-center text-xs mt-4'><a href="#" className='text-indigo-400 hover:text-indigo-300'>Forgot Password?</a></p>
                    <button type='submit' className='w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-full mt-6 transition-all'>{state === "Sign up" ? "Create Account" : "Login"}</button>
                </form>

                <p className='text-center mt-4'>Already have an account? <button onClick={() => setState("Login")} className='text-indigo-400 hover:text-indigo-300 cursor-pointer'>Login</button></p>

                <p className='text-center mt-2'>Don't have an account? <button onClick={() => setState("Sign up")} className='text-indigo-400 hover:text-indigo-300 cursor-pointer'>Sign up</button></p>

            </div>

        </div>
    )
}

export default Login