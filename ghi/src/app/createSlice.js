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
      }
      return headers;
    },
    reducerPath: "postGames",
    baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_GAME_NIGHT_API_HOST,
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
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
