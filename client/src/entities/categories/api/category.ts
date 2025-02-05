import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CategoryType } from '../types/categoryType';

// Определите сервис с базовым URL и ожидаемыми конечными точками
export const categoryApiSlice = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Categories'],
  endpoints: (builder) => ({
    getCategories: builder.query<CategoryType[], void>({
      query: () => '/categories',
      providesTags: ['Categories'],
    }),
    // getSkinById: builder.query<SkinType, SkinType['id']>({
    //   query: (id) => `skins/${String(id)}`,
    //   providesTags: ['Skins'],
    // }),
  }),
});

export const { useGetCategoriesQuery } = categoryApiSlice;
