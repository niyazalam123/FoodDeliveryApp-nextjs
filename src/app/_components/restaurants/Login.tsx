"use client";
import React, { useState } from 'react';
import { LoginType } from '../Types';
import BtnLoader from '../BtnLoader';

const Login = () => {
    const [loader, setLoader] = useState(false);
    const [error,setError] = useState(false);
    const [login, setLogin] = useState({
        email: "",
        password: ""
    });


    function handleChange(e: any) {
        const { name, value } = e.target;
        setLogin((prev): LoginType => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    function handleLogin(){
        if (!login.email || !login.password){
            setError(true);
            return;
        }
        else{
            setError(false);
        }

        console.log(login);
    }
    console.log(error);
    

    return (
        <>
            <div className='_Log_in1'>
                <h2>Enter your credential to login</h2>
                <div className='_Log_in2'>
                    <label htmlFor="_one1">Enter Email</label>
                    <input
                        type="email"
                        name="email"
                        id="_one1"
                        value={login.email}
                        placeholder='Enter Email'
                        onChange={handleChange}
                    />
                    {
                        error && !login.email && <span className='error'>email is required</span>
                    }
                </div>
                <div className='_Log_in2'>
                    <label htmlFor="_one2">Enter Password</label>
                    <input
                        type="password"
                        name="password"
                        id="_one2"
                        value={login.password}
                        placeholder='Enter Password'
                        onChange={handleChange}
                    />
                    {
                        error && !login.password && <span className='error'>password is required</span>
                    }
                </div>
                <div className='_Log_in3'>
                    <button disabled={loader ? true : false} style={{ cursor: loader ? "no-drop" : "cursor" }} onClick={handleLogin}>{loader ? <BtnLoader /> : "Log In"}</button>
                </div>
            </div>
        </>
    )
}

export default Login