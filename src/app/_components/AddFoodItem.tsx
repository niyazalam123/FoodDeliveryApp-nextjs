import React, { useEffect, useState } from 'react'
import "../restaurants/logSign.css";
import BtnLoader from "@/app/_components/BtnLoader"

const AddFoodItem = () => {
    const [productDetails, setProductDetails] = useState({
        name: "",
        price: "",
        description: "",
        imagePath: "",
    });
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [btnLoader, setBtnLoader] = useState(false);

    function handleProducts(e: any) {
        const { name, value } = e.target;
        setProductDetails((prev: any) => {
            return {
                ...prev,
                [name]: value
            }
        })
    };

    useEffect(() => {
        if (productDetails.name.length > 0 && productDetails.price.toString().length > 0 && productDetails.imagePath.length > 0 && productDetails.description.length > 0) {
            setBtnDisabled(false);
        }
        else {
            setBtnDisabled(true);
        }
    }, [productDetails])

    async function handleProductAdd() {
        try {
            setBtnLoader(true);
            const restaurentOwner: Storage = JSON.parse(localStorage.getItem("restaurantUser")!);
            const resp = await fetch("/api/restaurants/foods", {
                method: 'POST',
                body: JSON.stringify({...productDetails,restoId:restaurentOwner._id})
            });
            if (resp.ok) {
                productDetails.name="";
                productDetails.description="";
                productDetails.imagePath="";
                productDetails.price=""
                alert("data added successfully");
            }
        } catch (error: any) {
            console.log("error", error.message);
        }
        finally {
            setBtnLoader(false);
        }
    }

    return (
        <>
            <div className='_Wrapper'>
                <div className='_Log_in1'>
                    <h2>Add Food Item</h2>
                    <div className='_Log_in2'>
                        <label htmlFor="_one3">Enter Product Name</label>
                        <input type="text"
                            id="_one3"
                            placeholder='Enter Product Name'
                            name="name"
                            value={productDetails.name}
                            onChange={handleProducts}
                        />
                    </div>
                    <div className='_Log_in2'>
                        <label htmlFor="_one2">Enter Price</label>
                        <input
                            type="text"
                            id="_one2"
                            placeholder='Enter Price'
                            name="price"
                            value={productDetails.price}
                            onChange={handleProducts}
                        />
                    </div>
                    <div className='_Log_in2'>
                        <label htmlFor="_one3">Enter Description</label>
                        <input
                            type="text"
                            id="_one3"
                            placeholder='Enter Description'
                            name="description"
                            value={productDetails.description}
                            onChange={handleProducts}
                        />
                    </div>
                    <div className='_Log_in2'>
                        <label htmlFor="_one4">Enter Image Path</label>
                        <input
                            type="text"
                            id="_one4"
                            placeholder='Enter Image Path'
                            name="imagePath"
                            value={productDetails.imagePath}
                            onChange={handleProducts}
                        />
                    </div>
                    <div className='_Log_in3'>
                        <button onClick={handleProductAdd} disabled={btnDisabled ? true : false} style={{ cursor: btnDisabled ? "no-drop" : "pointer",opacity:btnDisabled?.8:1 }}>{btnLoader ? <BtnLoader /> : "Add Food Item"}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddFoodItem