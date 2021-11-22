import {configureStore} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {asyncThunkSlice, apiSlice} from "../slices";

export const store = configureStore({
    reducer: {
        [asyncThunkSlice.name]: asyncThunkSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatchT = typeof store.dispatch;
