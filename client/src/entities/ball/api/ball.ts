import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BallType } from '../types/bollTypes';

// Определите сервис с базовым URL и ожидаемыми конечными точками
export const ballApiSlice = createApi({
  reducerPath: 'ballSlice',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Balls'],
  endpoints: (builder) => ({
    getBalls: builder.query<BallType[], void>({
      query: () => '/balls',
      providesTags: ['Balls'],
    }),
    // getSkinById: builder.query<SkinType, SkinType['id']>({
    //   query: (id) => `skins/${String(id)}`,
    //   providesTags: ['Skins'],
    // }),
  }),
});

export const { useGetBallsQuery } = ballApiSlice;
