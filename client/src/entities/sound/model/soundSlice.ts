import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { soundSliceType } from '../types/soundTypes'

const initialState: soundSliceType = {
backround: []
}

export const soundSlice= createSlice({
  name: 'sound',
  initialState,
  reducers: {
    },
  extraReducers(builder) {
    builder
  },
});



export const {  } = soundSlice.actions

export default soundSlice.reducer