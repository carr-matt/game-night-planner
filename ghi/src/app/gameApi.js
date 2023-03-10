import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { accountSlice } from "./accountSlice";


export const gameSlice = createApi({
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
    reducerPath: "myGames",
    baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_GAME_NIGHT_API_HOST,
  }),
  tagTypes: ["GameList"],
  endpoints: (builder) => ({
    getOwned: builder.query({
      query: () => ({
        url: "/get_owned",
        credentials: "include",
      }),
      providesTags: ["GameList"],
    }),
      getFavorite: builder.query({
        query: () => ({
            url: "/get_favorites",
            credentials: "include",
      }),
      providesTags: ["GameList"],
    }),
    })
});
