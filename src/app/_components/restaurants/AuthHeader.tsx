"use client";
import Link from 'next/link';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import "../../restaurants/logSign.css";
import { userDetailsType } from "@/app/_components/Types";
import { useRouter, usePathname } from 'next/navigation';

const AuthHeader = () => {
    const [userDetails, setUserDetails] = useState<userDetailsType | any>();
    const router = useRouter();
    const pathName = usePathname();

    useEffect(() => {
        let userData: any = localStorage.getItem("restaurantUser");
        if (!userData && pathName === "/restaurants/dashboard") {
            router.push("/restaurants");
            setUserDetails(null);
            return;
        }
        try {
            if (userData && pathName === "/restaurants") {
                router.push("/restaurants/dashboard")
            }
            if(userData && pathName === "/restaurants/dashboard"){
                setUserDetails(JSON.parse(userData))
            }
        } catch (error) {
            console.error("Error parsing user data:", error);
        }
    }, []);


function logout() {
    localStorage.removeItem("restaurantUser");
    
    router.push("/restaurants");
}

return (
    <>
        <div className='_Header1 padding-lf-rt'>
            <ul className='_Header2'>
                <li className='_Header3'>
                    <h1 className='_Header4'><Link href="/">Food Delivery App</Link></h1>
                </li>
                <li className='_Header5'>
                    <ul className='_Header6'>
                        <li><Link href="">Home</Link></li>
                        {
                            userDetails && userDetails.name ?
                                <>
                                    <li><Link href="">Profile</Link></li>
                                    <button onClick={logout}>Logout</button>
                                </>
                                :
                                <li><Link href="">Login/SignUp</Link></li>
                        }
                    </ul>
                </li>
            </ul>
        </div>
    </>
)
}

export default AuthHeader;