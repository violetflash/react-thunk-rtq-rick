import {configureStore} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiService } from '../services';
import {asyncThunkSlice, querySlice} from "../slices";

export const store = configureStore({
    reducer: {
        [asyncThunkSlice.name]: asyncThunkSlice.reducer,
        [apiService.reducerPath]: apiService.reducer,
        [querySlice.name]: querySlice.reducer
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiService.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatchT = typeof store.dispatch;
