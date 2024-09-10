import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { build } from 'esbuild'

export const productsApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjsom.com',
    }),
    endpoints: (builder)=>({
        //get all products
        getAllProducts : builder.query({
            query: ()=>({
                url: `/products`,
                method: "Get",
            })
        })
    })
})

export const {
    useGetAllProductsQuery
} = productsApi