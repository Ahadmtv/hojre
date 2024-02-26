

// استفاده از RTK query  زمانی که داده ها در حال لوکال هستند




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
      }),
      getProductReview:builder.query({
        query:()=>"productReview"
      }),
      getPopularPosts:builder.query({
        query:()=>"topPosts"
      }),
      getTopTags:builder.query({
        query:()=> "topTags"
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
    useGetCatHomeQuery,
    useGetProductReviewQuery,
    useGetPopularPostsQuery,
    useGetTopTagsQuery,
   }= hojreApi


