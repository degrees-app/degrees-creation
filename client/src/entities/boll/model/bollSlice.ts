import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { bollSliceType } from '../types/bollTypes'

const initialState: bollSliceType = {
backround: []
}

export const bollSlice = createSlice({
  name: 'boll',
  initialState,
  reducers: {
    },
  extraReducers(builder) {
    builder
  },
});



export const {  } = bollSlice.actions

export default bollSlice.reducer