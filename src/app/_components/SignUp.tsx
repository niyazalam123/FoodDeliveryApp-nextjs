import React from 'react'

const SignUp = () => {
    return (
        <>
            <div className='_Log_in1'>
                <h2>Create your account</h2>
                <div className='_Log_in2'>
                    <label htmlFor="_one3">Enter Name</label>
                    <input type="text" name="Name" id="_one3" placeholder='Enter Name' />
                </div>
                <div className='_Log_in2'>
                    <label htmlFor="_one2">Enter Email</label>
                    <input type="email" name="Email" id="_one2" placeholder='Enter Email' />
                </div>
                <div className='_Log_in2'>
                    <label htmlFor="_one3">Enter Number</label>
                    <input type="number" name="Email" id="_one3" placeholder='Enter Number' />
                </div>
                <div className='_Log_in2'>
                    <label htmlFor="_one4">Enter Password</label>
                    <input type="password" name="password" id="_one4" placeholder='Enter Password' />
                </div>
                <div className='_Log_in2'>
                    <label htmlFor="_one5">Enter Confirm Password</label>
                    <input type="password" name="Confirm-password" id="_one5" placeholder='Enter Confirm Password' />
                </div>
                <div className='_Log_in2'>
                    <label htmlFor="_one6">Enter City</label>
                    <input type="text" name="City" id="_one6" placeholder='Enter City' />
                </div>
                <div className='_Log_in2'>
                    <label htmlFor="_one7">Enter Address</label>
                    <textarea name="address" id="_one7" placeholder='Enter Address'></textarea>
                </div>
                <div className='_Log_in3'>
                    <button>Sign Up</button>
                </div>
            </div>
        </>
    )
}

export default SignUp