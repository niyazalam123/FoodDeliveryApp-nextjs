"use client";
import React, { useState } from 'react'
import Login from './Login';
import SignUp from './SignUp';

const Registry = () => {
    const [user,setUser] = useState(true);
    return (
        <>
        {
            user ?  <Login /> : <SignUp />
        }
        <button className='_lo_sgn_btn' onClick={()=>setUser(!user)}>{user ? "Dont have account? Sign up" : "Have account ? Log In"}</button>
        </>
    )
}

export default Registry