import React from 'react';
import Registry from '../_components/restaurants/Registry';
import "./logSign.css";
import AuthHeader from '../_components/restaurants/AuthHeader';

const page = () => {
    return (
        <>
            <main className='_M-parent'>
                <AuthHeader />
                <section className='padding-lf-rt _main_container'>
                    <div className='_Rgst_p_1'>
                        <Registry />
                    </div>
                </section>
            </main>

        </>
    )
}

export default page