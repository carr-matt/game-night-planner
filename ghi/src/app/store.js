import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiSlice } from './api';
import { authApiSlice } from './authApi';
import { accountSlice } from './accountSlice';
import { gameSlice } from './gameApi';
import { randomSlice } from './randomApi';
import { detailSlice } from './detailApi';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [accountSlice.name]: accountSlice.reducer,
    [gameSlice.reducerPath]: gameSlice.reducer,
    [randomSlice.reducerPath]: randomSlice.reducer,
    [detailSlice.reducerPath]: detailSlice.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(authApiSlice.middleware)
      .concat(gameSlice.middleware)
      .concat(randomSlice.middleware)
      .concat(detailSlice.middleware);
  },
});

setupListeners(store.dispatch);
