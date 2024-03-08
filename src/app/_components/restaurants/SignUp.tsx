"use client";
import React, { useState } from 'react';
import { signUpForm } from "@/app/_components/Types";
import BtnLoader from "@/app/_components/BtnLoader";
import { useRouter } from 'next/navigation';


const date = new Date();
const validate = {
    name: "",
    email: "",
    number: "",
    password: "",
    ConfirmPassword: "",
    city: "",
    address: "",
    createdAt: date,
}

const SignUp = () => {
    const [loaderShow, setLoaderShow] = useState(false);
    const router = useRouter();
    const [error,setError] = useState(false);
    const [passwordMatch,setPasswordMatch] = useState(false);
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
        if (restaurentsSignup.password!==restaurentsSignup.ConfirmPassword){
            setPasswordMatch(true);
            return;
        }else{
            setPasswordMatch(false);
        }

        if (!restaurentsSignup.name || !restaurentsSignup.password || !restaurentsSignup.number || !restaurentsSignup.address || !restaurentsSignup.email || !restaurentsSignup.ConfirmPassword || !restaurentsSignup.city){
            setError(true);
            return;
        }
        else{
            setError(false);
        }
        setLoaderShow(true);
        try {
            const userData = await fetch("http://localhost:3000/api/restaurants", {
                method: "POST",
                body: JSON.stringify(restaurentsSignup)
            });

            const response = await userData.json();
            if (response.success) {
                setRestaurentsSignup(validate);
                const { result } = response;
                delete result.password;
                localStorage.setItem("restaurantUser", JSON.stringify(result));
                router.push("/restaurants/dashboard");
            }

        } catch (error) {
            console.log("something went wrong");
            setLoaderShow(false);
        } finally {
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
                    {
                        error && !restaurentsSignup.name && <span className='error'>name is required</span>
                    }
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
                    {
                        error && !restaurentsSignup.email && <span className='error'>email is required</span>
                    }
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
                    {
                        error && !restaurentsSignup.number && <span className='error'>number is required</span>
                    }
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
                    {
                        passwordMatch && <span className='error'>Password does not matched!</span>
                    }
                    {
                        error && !restaurentsSignup.password && <span className='error'>Password is required</span>
                    }
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
                    {
                        passwordMatch && <span className='error'>Password does not matched!</span>
                    }
                    {
                        error && !restaurentsSignup.ConfirmPassword && <span className='error'>confirm Password is required</span>
                    }
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
                    {
                        error && !restaurentsSignup.city && <span className='error'>city is required</span>
                    }
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
                    {
                        error && !restaurentsSignup.address&& <span className='error'>address is required</span>
                    }
                </div>
                <div className='_Log_in3'>
                    <button onClick={handleSignUp} disabled={loaderShow ? true : false} style={{ cursor: `${loaderShow ? "no-drop" : "pointer"}` }}>{loaderShow ? <BtnLoader /> : "Sign Up"}</button>
                </div>
            </div>
        </>
    )
}

export default SignUp