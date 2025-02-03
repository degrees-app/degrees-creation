import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BackroundState, TextStyle } from "../types/backroundTypes";
import { fetchBackgroundData, saveBackgroundData } from "../model/backroundThunk";

const initialState: BackroundState = {
  textStyle: {
    fontFamily: "Arial",
    color: "#ffffff",
  },
  degrees: "degrees",
  number1: "1,235",
  number2: "34",
};

const backroundSlice = createSlice({
  name: "backround",
  initialState,
  reducers: {
    setTextStyle: (state, action: PayloadAction<Partial<TextStyle>>) => {
      state.textStyle = { ...state.textStyle, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBackgroundData.fulfilled, (state, action) => {
        return { ...state, ...action.payload };
      })
      .addCase(saveBackgroundData.fulfilled, () => {
        console.log("Данные успешно сохранены в БД");
      });
  },
});

export const { setTextStyle } = backroundSlice.actions;
export default backroundSlice.reducer;
