import React from 'react'
import { useGetAllProductsQuery, useGetProductsByIdQuery } from '../app/service/dummyData'
export default function AllProducts() {
    //this is destructuring it
    const { data, isError, isLoading } = useGetAllProductsQuery({});
    const id = 1;
    const { data: singleProduct } = useGetProductsByIdQuery(id);
    console.log(singleProduct);
    if (isError) {
        return <h1> we have an error</h1>
    }
    if (isLoading) {
        return <h1> is loading.....</h1>
    }
    return (
        <>
            <div className='gap-8'>all products</div>
            {data?.products.map((p) => (
                <div className='m-8'>
                    <h1 key={p.id}>{p.title}</h1>
                    <h2 className='text-red-200' >{p.description}</h2>
                </div>
            ))}

            <h1 className='m-8 text-xl font-bold'>this is a get product by id</h1>
            <div className='m-8 text-blue-500'>
                <h1>{singleProduct?.title}</h1>
                <h1>{singleProduct?.description}</h1>
            </div>
        </>
    )
}
