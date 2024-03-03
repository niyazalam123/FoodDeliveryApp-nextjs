"use client";
import React, { useState } from 'react';


interface signUpForm {
    name: string;
    email: string;
    number: string;
    password: string;
    ConfirmPassword: string;
    city: string;
    address: string;
}

const SignUp = () => {
    const [errors, setErrors] = useState<any>({});
    const [restaurentsSignup, setRestaurentsSignup] = useState<signUpForm>({
        name: "",
        email: "",
        number: "",
        password: "",
        ConfirmPassword: "",
        city: "",
        address: "",
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

    function handleSignUp() {
        // const validationErrors = validateForm(restaurentsSignup);
        // setErrors(validationErrors);

        // if (Object.keys(validationErrors).length === 0) {
        //     // Submit form data (e.g., send to server)
        //     console.log("Form submitted successfully:", restaurentsSignup);
            setRestaurentsSignup({
                name: "",
                email: "",
                number: "",
                password: "",
                ConfirmPassword: "",
                city: "",
                address: "",
            });
        // }
    }

    // const validateForm = (data: signUpForm) => {
    //     const errors: any = {};
    //     if (data.name.trim() === "") {
    //         errors.name = "please enter name";
    //     }else {
    //         delete errors.name;
    //     }
        
    //     if (data.email.trim() === "") {
    //         errors.email = "please enter email";
    //     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    //         errors.email = "Invalid email format";
    //     }else {
    //         delete errors.email;
    //     }
    //     if (data.password.trim() === "") {
    //         errors.password = "please enter password";
    //     }else {
    //         delete errors.password;
    //     }
    //     if (data.ConfirmPassword.trim() === "") {
    //         errors.ConfirmPassword = "please enter confirm password";
    //     } else if (data.password !== data.ConfirmPassword) {
    //         errors.ConfirmPassword = "Passwords do not match";
    //     }else {
    //         delete errors.ConfirmPassword;
    //     }
    //     if (data.number.trim() === "") {
    //         errors.number = "please enter number";
    //     } else if ((data.number.length) < 10 && (data.number.length) > 10) {
    //         errors.number = "Number must be between 10 and 10";
    //     } else if (isNaN(+data.number)) {
    //         errors.number = "Invalid number format";
    //     }else {
    //         delete errors.number;
    //     }
    //     if (data.city.trim() === "") {
    //         errors.city = "please enter city";
    //     }else {
    //         delete errors.city;
    //     }
    //     if (data.address.trim() === "") {
    //         errors.address = "please enter address";
    //     }else {
    //         delete errors.address;
    //     }
    //     return errors;
    // };





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
                        required
                        className={errors.name ? "signupForm-error-input" : ""}
                    />
                    {errors.name && <span className="signupForm-error-message">{errors.name}</span>}
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
                        required
                        className={errors.email ? "signupForm-error-input" : ""}
                    />
                    {errors.email && <span className="signupForm-error-message">{errors.email}</span>}
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
                        required
                        min={10}
                        max={10}
                        className={errors.number ? "signupForm-error-input" : ""}
                    />
                    {errors.number && <span className="signupForm-error-message">{errors.number}</span>}
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
                        required
                        className={errors.password ? "signupForm-error-input" : ""}
                    />
                    {errors.password && <span className="signupForm-error-message">{errors.password}</span>}
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
                        required
                        className={errors.ConfirmPassword ? "signupForm-error-input" : ""}
                    />
                    {errors.ConfirmPassword && <span className="signupForm-error-message">{errors.ConfirmPassword}</span>}
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
                        required
                        className={errors.city ? "signupForm-error-input" : ""}
                    />
                    {errors.city && <span className="signupForm-error-message">{errors.city}</span>}
                </div>
                <div className='_Log_in2'>
                    <label htmlFor="_one7">Enter Address</label>
                    <textarea
                        name="address"
                        id="_one7"
                        placeholder='Enter Address'
                        value={restaurentsSignup.address}
                        onChange={handleFormData}
                        required
                        className={errors.address ? "signupForm-error-input" : ""}
                    ></textarea>
                    {errors.address && <span className="signupForm-error-message">{errors.address}</span>}
                </div>
                <div className='_Log_in3'>
                    <button onClick={handleSignUp}>Sign Up</button>
                </div>
            </div>
        </>
    )
}

export default SignUp