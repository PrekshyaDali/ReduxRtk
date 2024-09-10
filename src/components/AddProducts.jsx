import React from 'react'
import { useAddProductsMutation } from '../app/service/dummyData'

export default function AddProducts() {
    const [addProducts, { isLoading, isError }] = useAddProductsMutation();
    if (isError) {
        return <h1> we have an error</h1>
    }
    if (isLoading) {
        return <h1> is loading.....</h1>
    }
    const  SubmitHandler= async()=>{
        try{
            const newProducts ={
                id: 195,
                title: "Prekshya",
                description: "This is a prekshya description",
                category: "react redux",
                price: 200
            }
            const res = await addProducts(newProducts).unwrap();
            console.log(res);
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div className='p-6'>
            <button className='h-10 2-24 bg-purple-300 p-2' disabled={isLoading} type="submit" onClick={SubmitHandler}>add new product</button>
        </div>
    )
}
