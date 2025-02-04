import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ballSliceType } from '../types/ballTypes'

const initialState: ballSliceType = {
background: []
}

export const ballSlice = createSlice({
  name: 'ball',
  initialState,
  reducers: {
    },
  extraReducers(builder) {
    builder
  },
});



export const {  } = ballSlice.actions

export default ballSlice.reducer