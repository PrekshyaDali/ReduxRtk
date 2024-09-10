import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com/',
    }),
    endpoints: (builder)=>({
        //get all products
        getAllProducts : builder.query({
            query: ()=>({
                url: `/products`,
                method: "GET",
            })
        }),

        //get products by id
        getProductsById : builder.query({
            query: (id)=>({
                url: `/products/${id}`,
                method: "GET",
            })
        }),

         //add products 
         addProducts : builder.mutation({
            query: (newProduct)=>({
                url: `/products/add`,
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newProduct),
            })
        }),

        //update product
        updateProduct: builder.mutation({
            query: ({id, updatedProduct})=>({
                url: `/products/${id}`,
                method: "PATCH",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(updatedProduct),
        })
    })
    }),
})

export const {
    useGetAllProductsQuery,
    useGetProductsByIdQuery,


    useAddProductsMutation,
    useUpdateProductMutation,
    
} = productsApi