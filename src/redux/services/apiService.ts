import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { IResponse } from '../types';
import {ICharacter} from "../../models";


export const apiService = createApi({
    reducerPath: 'queryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
    endpoints: (build) => ({
        fetchCharactersPage: build.query<IResponse, number>({
            query: (page) => ({
                url: '/character/',
                params: {
                    page
                }
            })
        }),
        fetchCharacterById: build.query<ICharacter, number>({
            query: (id) => `/${id}`,
        }),
    }),
})


export const {useFetchCharactersPageQuery, useLazyFetchCharacterByIdQuery} = apiService;
// export const {useGetCharactersPageQuery} = apiService;
