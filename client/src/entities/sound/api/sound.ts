import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SoundType } from '../types/soundTypes';


// Определите сервис с базовым URL и ожидаемыми конечными точками
export const soundApiSlice = createApi({
  reducerPath: 'soundApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Sounds'],
  endpoints: (builder) => ({
    getSounds: builder.query<SoundType[], void>({
      query: () => '/sounds',
      providesTags: ['Sounds'],
    }),
    // getSkinById: builder.query<SkinType, SkinType['id']>({
    //   query: (id) => `skins/${String(id)}`,
    //   providesTags: ['Skins'],
    // }),
  }),
});

export const { useGetSoundsQuery } = soundApiSlice;
