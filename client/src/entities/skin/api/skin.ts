import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SkinType } from '../model/type';

export const skinApiSlice = createApi({
  reducerPath: 'skinsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Skins'],
  endpoints: (builder) => ({
    getSkins: builder.query<SkinType[], void>({
      query: () => 'skins',
      providesTags: ['Skins'],
    }),
    // getSkinById: builder.query<SkinType, SkinType['id']>({
    //   query: (id) => `skins/${String(id)}`,
    //   providesTags: ['Skins'],
    // }),
  }),
});

export const { useGetSkinsQuery } = skinApiSlice;
