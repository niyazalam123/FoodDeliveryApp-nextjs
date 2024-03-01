import React from 'react'
import Login from '../_components/Login'
import SignUp from '../_components/SignUp'

const page = () => {
    return (
        <>
            <main className='padding-lf-rt _main_container'>
                <div className='_Rgst_p_1'>
                    <Login />
                    {/* <SignUp /> */}
                </div>
            </main>
        </>
    )
}

export default page