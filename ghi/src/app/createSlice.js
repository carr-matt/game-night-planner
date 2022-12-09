import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { accountSlice } from "./accountSlice";


export const createSlice = createApi({
    prepareHeaders: (headers, { getState }) => {
      const selector = accountSlice.endpoints.getToken.select();
      const { data: tokenData } = selector(getState());
      if (tokenData && tokenData.access_token) {
        console.log(tokenData)
        headers.set(
          "Authorization",
          `${tokenData.token_type} ${tokenData.access_token}`
        );
        // console.log({tokenData})
      }
      return headers;
    },
    reducerPath: "postGames",
    baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_game_night_API_HOST,
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    // Get all the methods from preferences //
    getPosts: builder.query({
        query: () => '/owned',
        providesTags: ['Post'],
      }),
      addNewPost: builder.mutation({
      
      query: () => ({
        url: '/owned',
        method: 'POST',
        body: {bgaID: "uFCQHtGeAS", name: "Cosmic Encounter"},
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Post'],
    }),

    
  }),
})


export const { useGetPostsQuery, useAddNewPostMutation } = createSlice
      
// console.log(payload)
    // "bgaID": bgaID, 
//JSON.stringify({ "name": name }),
