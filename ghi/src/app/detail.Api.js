import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { accountSlice } from "./accountSlice";


export const detailSlice = createApi({
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
    reducerPath: "myDetailGames",
    baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_game_night_API_HOST,
  }),
  tagTypes: ["GameList"],
  endpoints: (builder) => ({
    // Get all the methods from preferences //
    getDetail: builder.query({
      query: () => ({
        url: "/bga/game_detail/",
        credentials: "include",
      }),
      providesTags: ["GameList"],
    }),
    })
});
