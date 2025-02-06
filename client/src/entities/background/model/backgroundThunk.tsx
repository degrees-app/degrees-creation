import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = '/api/backgrounds';

// Получение данных из БД
export const fetchBackgroundData = createAsyncThunk(
  'background/fetchBackgroudData',
  async () => {
    const response = await fetch(API_URL);
    return await response.json();
  },
);

// Сохранение данных в БД
export const saveBackgroundData = createAsyncThunk(
  'background/saveBackgroundData', async (data: FormData) => {
  await fetch(API_URL + '/save', {
    method: 'POST',
    body: data,
  });
});
