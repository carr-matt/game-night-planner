import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiSlice } from './api';
import { authApiSlice } from './authApi';
import { gameSlice } from './gameApi';
import { randomSlice } from './randomApi';
import { accountSlice } from './accountSlice';
import { mechanicSlice } from './mechanics';
import { detailApi } from './detailApi';
import { createSlice } from './createSlice';
import { categorySlice, useGetCategoryQuery } from './category';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [accountSlice.reducerPath]: accountSlice.reducer,
    [gameSlice.reducerPath]: gameSlice.reducer,
    [randomSlice.reducerPath]: randomSlice.reducer,
    [detailApi.reducerPath]: detailApi.reducer,
    [createSlice.reducerPath]: createSlice.reducer,
    [mechanicSlice.reducerPath]: mechanicSlice.reducer,
    [categorySlice.reducerPath]: categorySlice.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(authApiSlice.middleware)
      .concat(gameSlice.middleware)
      .concat(randomSlice.middleware) 
      .concat(createSlice.middleware)
      .concat(detailApi.middleware)
      .concat(mechanicSlice.middleware)
      .concat(categorySlice.middleware);
  },
});

setupListeners(store.dispatch);
