import React, { useState } from 'react'
import "../restaurants/logSign.css";

const AddFoodItem = () => {
    const [productDetails,setProductDetails] = useState({
        name:"",
        price:"",
        description:"",
        imagePath:"",
    });

    function handleProducts(e:any){
        const {name,value} = e.target;
        setProductDetails((prev:any)=>{
            return{
                ...prev,
                [name]:value
            }
        })
    };

    function handleProductAdd(){
        console.log(productDetails);
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
                        <button onClick={handleProductAdd}>Add Food Item</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddFoodItem