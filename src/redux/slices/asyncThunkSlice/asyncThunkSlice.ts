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

export const fetchCharPageOnScroll =  createAsyncThunk(
    'asyncThunk/fetchCharPageOnScroll',
    async (page: number = 1, thunkAPI) => {
        try {
            const response = await axios.get<IResponse>("https://rickandmortyapi.com/api/character/", {
                params: {
                    page
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
    char: ICharacter;
    characters: ICharacter[],
    charactersOnScroll: ICharacter[],
    isLoading: boolean;
    charIsLoading: boolean,
    isLoadingOnScroll: boolean,
    error: string | null;
}

const initialState: IState = {
    info: {} as IResponseInfo,
    char: {} as ICharacter,
    characters: [],
    charactersOnScroll: [],
    isLoading: false,
    charIsLoading: false,
    isLoadingOnScroll: false,
    error: null
};

export const asyncThunkSlice = createSlice({
    name: 'asyncThunk',
    initialState,
    reducers: {
        clearCharactersList: (state) => {
            state.characters = [];
        }
    },
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
        [fetchCharPageOnScroll.pending.type]: (state) => {
            state.isLoadingOnScroll = true;
        },
        [fetchCharPageOnScroll.fulfilled.type]: (state, action: PayloadAction<ICharacter[]>) => {
            console.log(state.charactersOnScroll);
            state.isLoadingOnScroll = false;
            state.charactersOnScroll = [...state.charactersOnScroll, ...action.payload];
        },
        [fetchCharPageOnScroll.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoadingOnScroll = false;
            state.error = action.payload;
        }
    }
});

export const {clearCharactersList} = asyncThunkSlice.actions;

