import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios from "axios";
import {ICharacter} from "../../../components/CharacterCard/types";

interface IResponseResult {
    results: ICharacter[]
}

interface IResponseInfo {
    info: {
        count: number,
        pages: number,
        next: string,
        prev: string
    }
}

export const fetchCharactersPage =  createAsyncThunk(
    'asyncThunk/fetchCharacters',
    async (page: number = 1, thunkAPI) => {
        try {
            const response = await axios.get<IResponseResult>("https://rickandmortyapi.com/api/character", {
                params: {
                    _page: page
                }
            });
            console.log(response.data.results);
            return response.data.results;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
);

interface IState {
    info: IResponseInfo;
    characters: ICharacter[],
    isLoading: boolean;
    error: string | null;
}

const initialState: IState = {
    info: {} as IResponseInfo,
    characters: [],
    isLoading: false,
    error: null
};

export const asyncThunkSlice = createSlice({
    name: 'asyncThunk',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCharactersPage.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchCharactersPage.fulfilled.type]: (state, action: PayloadAction<ICharacter[]>) => {
            // state.isLoading = false;
            state.error = null;
            state.characters = action.payload;
        },
        [fetchCharactersPage.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});