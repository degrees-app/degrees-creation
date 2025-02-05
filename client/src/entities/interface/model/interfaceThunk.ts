import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { InterfaceState } from '../types/interfaceTypes';

const API_URL = '/api/interface';

// Получение данных из БД
export const fetchInterfaceData = createAsyncThunk(
  'interface/fetchInterfaceData',
  async () => {
    const response = await fetch(API_URL);
    return await response.json();
  },
);

// Сохранение данных в БД
export const saveInterfaceData = createAsyncThunk<
  void,
  InterfaceState,
  { state: RootState }
>('interface/saveInterfaceData', async (data) => {
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
});
