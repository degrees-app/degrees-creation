import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { interfaceSliceType } from '../types/interfaceTypes'

const initialState: interfaceSliceType = {
backround: []
}

export const interfaceSlice = createSlice({
  name: 'interface',
  initialState,
  reducers: {
    },
  extraReducers(builder) {
    builder
  },
});



export const {  } = interfaceSlice.actions

export default interfaceSlice.reducer