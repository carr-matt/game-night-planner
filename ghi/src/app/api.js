import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { authApiSlice } from './authApi';

export const apiSlice = createApi({
  reducerPath: 'moneygames',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_GAME_NIGHT_API_HOST,
    prepareHeaders: (headers, { getState }) => {
      const selector = authApiSlice.endpoints.getToken.select();
      const { data: tokenData } = selector(getState());
      if (tokenData && tokenData.access_token) {
        headers.set('Authorization', `Bearer ${tokenData.access_token}`);
      }
      return headers;
    }
  }),
  tagTypes: ['Account', 'Games', 'Token'],
  endpoints: builder => ({
    addGame: builder.mutation({
      query: form => {
        const formData = new FormData(form);
        const entries = Array.from(formData.entries());
        const data = entries.reduce((acc, [key, value]) => {acc[key] = Number.parseInt(value) || value; return acc;}, {});
        return {
          method: 'post',
          url: '/bga/money_maker',
          credentials: 'include',
          body: data,
        }
      },
      invalidatesTags: [{type: 'Games', id: 'LIST'}],
    }),
    getGames: builder.query({
      query: () => `/bga/money_maker`,
      providesTags: data => {
        const tags = [{type: 'Games', id: 'LIST'}];
        if (!data || !data.games) return tags;

        const { games } = data;
        if (games) {
          tags.concat(...games.map(({ id }) => ({type: 'Games', id})));
        }
        return tags;
      }
    }),

  }),
});

export const {
  useAddGameMutation,
  useGetGamesQuery,

} = apiSlice;
