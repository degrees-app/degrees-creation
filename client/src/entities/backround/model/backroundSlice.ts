import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BackroundState, TextStyle } from "../types/backroundTypes";
import { fetchInitialText } from "../model/backroundThunk";

const initialState: BackroundState = {
  text: "Привет, мир!",
  textStyle: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#000000",
  },
};

const backroundSlice = createSlice({
  name: "backround",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    setTextStyle: (state, action: PayloadAction<Partial<TextStyle>>) => {
      state.textStyle = { ...state.textStyle, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInitialText.fulfilled, (state, action) => {
      state.text = action.payload;
    });
  },
});

export const { setText, setTextStyle } = backroundSlice.actions;
export default backroundSlice.reducer;
