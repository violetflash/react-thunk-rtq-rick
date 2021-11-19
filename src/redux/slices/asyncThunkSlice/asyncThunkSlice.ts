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

export const fetchCharacterById =  createAsyncThunk(
    'asyncThunk/fetchCharacterById',
    async (id: number, thunkAPI) => {
        try {
            const response = await axios.get<ICharacter>(`https://rickandmortyapi.com/api/character/${id}`);

            return response.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
);

interface IState {
    info: IResponseInfo;
    char: ICharacter;
    characters: ICharacter[],
    isLoading: boolean;
    charIsLoading: boolean,
    error: string | null;
}

const initialState: IState = {
    info: {} as IResponseInfo,
    char: {} as ICharacter,
    characters: [],
    isLoading: false,
    charIsLoading: false,
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
        },
        [fetchCharacterById.pending.type]: (state) => {
            state.charIsLoading = true;
        },
        [fetchCharacterById.fulfilled.type]: (state, action: PayloadAction<ICharacter>) => {
            state.charIsLoading = false;
            state.char = action.payload;
        },
        [fetchCharacterById.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});
