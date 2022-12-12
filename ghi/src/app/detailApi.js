import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { accountSlice } from "./accountSlice";



export const detailApi = createApi({
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
    baseUrl: process.env.REACT_APP_GAME_NIGHT_API_HOST,
  }),
  tagTypes: ["GameList"],
  endpoints: (builder) => ({
    getDetail: builder.query({
      query: (bgaID) => ({
        url: `/bga/game_detail?ids=${bgaID}`,
        credentials: "include",
      }),
      providesTags: ["GameList"],
    }),
    })
});

export const {useGetDetailQuery} = detailApi
