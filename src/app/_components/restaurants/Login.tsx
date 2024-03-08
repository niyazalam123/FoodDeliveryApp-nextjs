import React from 'react'

const Login = () => {
    return (
        <>
            <div className='_Log_in1'>
                <h2>Enter your credential to login</h2>
                <div className='_Log_in2'>
                    <label htmlFor="_one1">Enter Email</label>
                    <input type="email" name="Email" id="_one1" placeholder='Enter Email' />
                </div>
                <div className='_Log_in2'>
                    <label htmlFor="_one2">Enter Password</label>
                    <input type="password" name="password" id="_one2" placeholder='Enter Password' />
                </div>
                <div className='_Log_in3'>
                    <button>Log In</button>
                </div>
            </div>
        </>
    )
}

export default Login