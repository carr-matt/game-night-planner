import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { accountSlice } from "./accountSlice";


export const randomSlice = createApi({
    prepareHeaders: (headers, { getState }) => {
      const selector = accountSlice.endpoints.getToken.select();
      const { data: tokenData } = selector(getState());
      if (tokenData && tokenData.access_token) {
        headers.set(
          "Authorization",
          `${tokenData.token_type} ${tokenData.access_token}`
        );
      }
      return headers;
    },
    reducerPath: "games",
    baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_GAME_NIGHT_API_HOST,
  }),
  tagTypes: ["GameList"],
  endpoints: (builder) => ({
    // Get all the methods from preferences //
    getRandom: builder.query({
      query: () => ({
        url: "/bga/random_game/",
        credentials: "include",
      }),
      providesTags: ["GameList"],
    }),
    })
});

export const { useGetRandomQuery } = randomSlice
