import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { accountApiSlice } from "./accountApi";


export const myGamesApi = createApi({
    prepareHeaders: (headers, { getState }) => {
      const selector = accountApiSlice.endpoints.getToken.select();
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
    baseUrl: process.env.REACT_APP_game_night_API_HOST,
  }),
  tagTypes: ["GameList"],
  endpoints: (builder) => ({
    // Get all the methods from preferences //
    get_owned: builder.query({
      query: () => ({
        url: "/preferences/",
        credentials: "include",
      }),
      providesTags: ["GameList"],
    }),
    })
});

export const {
  useGetMyGameQuery
} = gameApi;
