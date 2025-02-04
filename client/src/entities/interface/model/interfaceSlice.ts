import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InterfaceState, TextStyle } from '../types/interfaceTypes';
import { fetchInterfaceData, saveInterfaceData } from './interfaceThunk';

const initialState: InterfaceState = {
  textStyle: {
    fontFamily: 'Arial',
    color: '#ffffff',
  },
  degrees: 'degrees',
  number1: '1,235',
  number2: '34',
};

const interfaceSlice = createSlice({
  name: 'interface',
  initialState,
  reducers: {
    setTextStyle: (state, action: PayloadAction<Partial<TextStyle>>) => {
      state.textStyle = { ...state.textStyle, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInterfaceData.fulfilled, (state, action) => {
        return { ...state, ...action.payload };
      })
      .addCase(saveInterfaceData.fulfilled, () => {
        console.log('Данные успешно сохранены в БД');
      });
  },
});

export const { setTextStyle } = interfaceSlice.actions;
export default interfaceSlice.reducer;
