import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios from "axios";
import {ICharacter} from "../../../components/CharacterCard/types";

interface IResponseInfo {
    count: number;
    pages: number;
    next: string;
    prev: string;
    current: number;
}

interface IResponse {
    results: ICharacter[];
    info: IResponseInfo;
}


export const fetchCharactersPage =  createAsyncThunk(
    'asyncThunk/fetchCharacters',
    async (page: number = 1, thunkAPI) => {
        try {
            const response = await axios.get<IResponse>("https://rickandmortyapi.com/api/character/", {
                params: {
                    page
                }
            });

            return {
                results: response.data.results,
                info: { ...response.data.info, current: page }
            };
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
        [fetchCharactersPage.fulfilled.type]: (state, action: PayloadAction<IResponse>) => {
            state.isLoading = false;
            state.error = null;
            state.characters = action.payload.results;
            state.info = action.payload.info;
        },
        [fetchCharactersPage.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});
