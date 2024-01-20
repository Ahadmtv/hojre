import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const hojreApi = createApi({
    reducerPath: 'hojreApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (builder) => ({
      getProducts: builder.query({
        query: () => "products",
      }),
      getSingleProduct:builder.query({
        query:(id)=>`products/${id}`
      })
    }),
  })
  export const { useGetProductsQuery,useGetSingleProductQuery } = hojreApi