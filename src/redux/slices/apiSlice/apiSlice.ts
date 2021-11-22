import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query';
import {ICharacter} from "../../../models";
import { IResponse } from '../types';

export const apiSlice = createApi({
    reducerPath: 'Rick&MortyApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/character/' }),
    endpoints: (builder) => ({
        getCharactersPage: builder.query<IResponse, number>({
            query: (id) => `?page=${id}`,
        }),
        getCharacterById: builder.query<ICharacter, number>({
            query: (id) => `/${id}`,
        }),
    }),
})

// export const {useGetCharactersPageQuery, useGetCharacterById} = apiSlice;
export const {endpoints} = apiSlice;
