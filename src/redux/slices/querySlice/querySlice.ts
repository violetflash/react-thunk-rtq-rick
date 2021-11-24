import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { ICharacter } from '../../../models';

interface IQueryState {
    items: ICharacter[];
}

const initialState: IQueryState = {
    items: []
}

export const querySlice = createSlice({
    name: 'querySlice',
    initialState,
    reducers: {
        addNewPage: (state, action: PayloadAction<ICharacter[]>) => {
            state.items = [...state.items, ...action.payload];
        }
    }
})

export const {addNewPage} = querySlice.actions;
