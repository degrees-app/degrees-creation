import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BackgroundState, TextStyle } from '../types/backgroundTypes';
import { fetchInterfaceData, saveInterfaceData } from './interfaceThunk';

const initialState: BackgroundState = {

};

const backgroundSlice = createSlice({
  name: 'interface',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
  },
});

export const { setTextStyle } = backgroundSlice.actions;
export default backgroundSlice.reducer;
