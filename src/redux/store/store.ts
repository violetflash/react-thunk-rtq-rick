import {configureStore} from '@reduxjs/toolkit';
import {asyncThunkSlice} from "../slices";

export const store = configureStore({
    reducer: {
        [asyncThunkSlice.name]: asyncThunkSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatchT = typeof store.dispatch;