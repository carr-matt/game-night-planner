import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { accountSlice } from "./accountSlice";


export const categorySlice = createApi({
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
    reducerPath: "gameCategory",
    baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_game_night_API_HOST,
  }),
  tagTypes: ["CategoryList"],
  endpoints: (builder) => ({
    // Get all the methods from preferences //
    getCategory: builder.query({
      query: () => ({
        url: "/bga/game_categories_list/",
        credentials: "include",
      }),
      providesTags: ["CategoryList"],
    }),
    })
});

export const { useGetCategoryQuery } = categorySlice
