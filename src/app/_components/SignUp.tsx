"use client";
import React, { useState } from 'react';
import {signUpForm} from "@/app/_components/Types";
import BtnLoader from "@/app/_components/BtnLoader";


const SignUp = () => {
    const date = new Date();
    const [loaderShow,setLoaderShow] = useState(false);
    const [restaurentsSignup, setRestaurentsSignup] = useState<signUpForm>({
        name: "",
        email: "",
        number: "",
        password: "",
        ConfirmPassword: "",
        city: "",
        address: "",
        createdAt: date,
    })

    function handleFormData(e: any) {
        const { name, value } = e.target;
        setRestaurentsSignup((prev): signUpForm => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    async function handleSignUp() {
        setLoaderShow(true);
        try {
            const userData = await fetch("http://localhost:3000/api/restaurants", {
                method: "POST",
                body: JSON.stringify(restaurentsSignup)
            });
            
        } catch (error) {
            console.log("something went wrong");
            setLoaderShow(false);
        }finally{
            setLoaderShow(false);
        }
    }


    return (
        <>
            <div className='_Log_in1'>
                <h2>Create your account</h2>
                <div className='_Log_in2'>
                    <label htmlFor="_one3">Enter Name</label>
                    <input type="text"
                        name="name"
                        id="_one3"
                        placeholder='Enter Name'
                        value={restaurentsSignup.name}
                        onChange={handleFormData}
                    />
                </div>
                <div className='_Log_in2'>
                    <label htmlFor="_one2">Enter Email</label>
                    <input
                        type="email"
                        name="email"
                        id="_one2"
                        placeholder='Enter Email'
                        value={restaurentsSignup.email}
                        onChange={handleFormData}
                    />
                </div>
                <div className='_Log_in2'>
                    <label htmlFor="_one3">Enter Number</label>
                    <input
                        type="number"
                        name="number"
                        id="_one3"
                        placeholder='Enter Number'
                        value={restaurentsSignup.number}
                        onChange={handleFormData}
                    />
                </div>
                <div className='_Log_in2'>
                    <label htmlFor="_one4">Enter Password</label>
                    <input
                        type="password"
                        name="password"
                        id="_one4"
                        placeholder='Enter Password'
                        value={restaurentsSignup.password}
                        onChange={handleFormData}
                    />
                </div>
                <div className='_Log_in2'>
                    <label htmlFor="_one5">Enter Confirm Password</label>
                    <input
                        type="password"
                        name="ConfirmPassword"
                        id="_one5"
                        placeholder='Enter Confirm Password'
                        value={restaurentsSignup.ConfirmPassword}
                        onChange={handleFormData}
                    />
                </div>
                <div className='_Log_in2'>
                    <label htmlFor="_one6">Enter City</label>
                    <input
                        type="text"
                        name="city"
                        id="_one6"
                        placeholder='Enter City'
                        value={restaurentsSignup.city}
                        onChange={handleFormData}
                    />
                </div>
                <div className='_Log_in2'>
                    <label htmlFor="_one7">Enter Address</label>
                    <textarea
                        name="address"
                        id="_one7"
                        placeholder='Enter Address'
                        value={restaurentsSignup.address}
                        onChange={handleFormData}
                    ></textarea>
                </div>
                <div className='_Log_in3'>
                    <button onClick={handleSignUp} disabled = {loaderShow ? true : false} style={{cursor:`${loaderShow?"no-drop":"pointer"}`}}>{loaderShow ?<BtnLoader /> : "Sign Up"}</button>
                </div>
            </div>
        </>
    )
}

export default SignUp