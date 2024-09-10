import React from 'react'
import { useUpdateProductMutation } from '../app/service/dummyData'

export default function UpdateProducts({ productId }) {

    const [updateProducts, { data, isLoading, isError }] = useUpdateProductMutation();
    if (isError) {
        return <h1> we have an error</h1>
    }
    if (isLoading) {
        return <h1> is loading.....</h1>
    }

    const SubmitHandler = async () => {
        try {
            const updatedProducts = {
                title: 'Title updated',
            }
            const res = await updateProducts({ id: productId, updatedProduct: updatedProducts });
            console.log(res);
        } catch (error) {
        }
    }
    return (
        <>
            <button className='h-10 w-25 bg-green-400' onClick={SubmitHandler} disabled={isLoading}>Update Product</button>
            <h1>{data?.title}</h1>
        </>
    )
}
