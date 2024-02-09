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
      }),
      getBlogs:builder.query({
        query:()=>"blogs",
      }),
      getSingleBlog:builder.query({
        query:(id)=>`blogs/${id}`,
      }),
      getCountList:builder.query({
        query:()=> "countList"
      }),
      getSponsorList:builder.query({
        query:()=> "sponsorList"
      }),
      getCatHome:builder.query({
        query:()=> "catHome"
      })
    }),
  })
  export const { 
    useGetProductsQuery,
    useGetSingleProductQuery,
    useGetBlogsQuery,
    useGetSingleBlogQuery,
    useGetCountListQuery,
    useGetSponsorListQuery,
    useGetCatHomeQuery
   }= hojreApi


