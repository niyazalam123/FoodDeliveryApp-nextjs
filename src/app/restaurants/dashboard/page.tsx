"use client";
import AuthHeader from '@/app/_components/restaurants/AuthHeader'
import React, { useState } from 'react';
import "../logSign.css";
import AddFoodItem from '@/app/_components/AddFoodItem';

const page = () => {
  const [toggleBtn,setToggleBtn] = useState(false);
  return (
    <>
    <AuthHeader />
    <button onClick={()=>setToggleBtn(false)}>Dashboard</button>
    <button onClick={()=>setToggleBtn(true)}>Add Food Item</button>
    {
      toggleBtn ? <AddFoodItem /> : <h3>Welcome to dashbaord</h3>
    }
    </>
  )
}

export default page