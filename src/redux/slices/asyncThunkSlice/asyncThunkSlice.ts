import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios from "axios";
import { ICharacter } from '../../../models';
import { IResponse, IResponseInfo } from '../types';

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
    'asyncOnScroll/fetchCharPageOnScroll',
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

interface Base {
    isLoading: boolean;
    error: string | null;
}

interface IChar extends Base {
    item: ICharacter;
}

interface IStateObject extends Base {
    items: ICharacter[],
    info: IResponseInfo;
}

interface IState {
    chosenChar: IChar;
    pagination: IStateObject;
    onScroll: IStateObject;
}

const initialState: IState = {
    chosenChar: {
        item: {} as ICharacter,
        isLoading: false,
        error: null
    },

    pagination: {
        info: {} as IResponseInfo,
        items: [],
        error: null,
        isLoading: false
    },
    onScroll: {
        info: {} as IResponseInfo,
        items: [],
        error: null,
        isLoading: false
    }
};

export const asyncThunkSlice = createSlice({
    name: 'asyncThunk',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCharactersPage.pending.type]: (state) => {
            state.pagination.isLoading = true;
        },
        [fetchCharactersPage.fulfilled.type]: (state, action: PayloadAction<IResponse>) => {
            state.pagination.isLoading = false;
            state.pagination.error = null;
            state.pagination.items = action.payload.results;
            state.pagination.info = action.payload.info;
        },
        [fetchCharactersPage.rejected.type]: (state, action: PayloadAction<string>) => {
            state.pagination.isLoading = false;
            state.pagination.error = action.payload;
        },

        //fetch certain char by ID
        [fetchCharacterById.pending.type]: (state) => {
            state.chosenChar.isLoading = true;
        },
        [fetchCharacterById.fulfilled.type]: (state, action: PayloadAction<ICharacter>) => {
            state.chosenChar.isLoading = false;
            state.chosenChar.item = action.payload;
        },
        [fetchCharacterById.rejected.type]: (state, action: PayloadAction<string>) => {
            state.chosenChar.isLoading = false;
            state.chosenChar.error = action.payload;
        },

        //onScroll
        [fetchCharPageOnScroll.pending.type]: (state) => {
            state.onScroll.isLoading = true;
        },
        [fetchCharPageOnScroll.fulfilled.type]: (state, action: PayloadAction<IResponse>) => {
            state.onScroll.isLoading = false;
            //Где проверка на уже загруженные страницы?
            state.onScroll.items = [...state.onScroll.items, ...action.payload.results];
            state.onScroll.info = action.payload.info;

        },
        [fetchCharPageOnScroll.rejected.type]: (state, action: PayloadAction<string>) => {
            state.onScroll.isLoading = false;
            state.onScroll.error = action.payload;
        }
    }
});