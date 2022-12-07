import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiSlice } from './api';
import { authApiSlice } from './authApi';
import { accountSlice } from './accountSlice';
import { gameSlice } from './gameApi';
import { randomSlice } from './randomApi';
import { detailApi } from './detailApi';
import { createSlice } from './createSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [gameSlice.reducerPath]: gameSlice.reducer,
    [randomSlice.reducerPath]: randomSlice.reducer,
    [detailApi.reducerPath]: detailApi.reducer,
    [createSlice.reducerPath]: createSlice.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(authApiSlice.middleware)
      .concat(gameSlice.middleware)
      .concat(randomSlice.middleware)
      .concat(createSlice.middleware)
      .concat(detailApi.middleware);
  },
});

setupListeners(store.dispatch);
