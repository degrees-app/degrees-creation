import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { backroundSliceType } from '../types/backroundTypes'

const initialState: backroundSliceType = {
backround: []
}

export const backroundSlice = createSlice({
  name: 'backround',
  initialState,
  reducers: {
    },
  extraReducers(builder) {
    builder
  },
});



export const {  } = backroundSlice.actions

export default backroundSlice.reducer