import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiSlice } from './api';
import { authApiSlice } from './authApi';
import { accountSlice } from './accountSlice';
import { gameSlice } from './gameApi';
import { randomSlice } from './randomApi';
import { detailApi } from './detailApi';
import { carouselSlice } from './carouselApi';
import { createSlice } from './createSlice';
import { mechanicSlice } from './mechanics';
import { categorySlice, useGetCategoryQuery } from './category';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [accountSlice.name]: accountSlice.reducer,
    [createSlice.reducerPath]: accountSlice.reducer,
    [gameSlice.reducerPath]: gameSlice.reducer,
    [randomSlice.reducerPath]: randomSlice.reducer,
    [detailApi.reducerPath]: detailApi.reducer,
    [carouselSlice.reducerPath]: carouselSlice.reducer,
    [mechanicSlice.reducerPath]: mechanicSlice.reducer,
    [categorySlice.reducerPath]: categorySlice.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(authApiSlice.middleware)
      .concat(createSlice.middleware)
      .concat(gameSlice.middleware)
      .concat(randomSlice.middleware)
      .concat(detailApi.middleware)
      .concat(carouselSlice.middleware)
      .concat(mechanicSlice.middleware)
      .concat(categorySlice.middleware);
  },
});

setupListeners(store.dispatch);
