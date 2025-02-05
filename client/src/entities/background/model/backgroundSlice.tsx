import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BackgroundState } from "../types/backgroundTypes";
import { fetchBackground} from "./backgroundThunk";

const initialState: BackgroundState = {
  backgroundImage: null, // ✅ Убедись, что есть начальное значение!
  backgroundColor: "#000000",
  brightness: 1,
  contrast: 1,
  status: "idle",
};

const backgroundSlice = createSlice({
  name: "background",
  initialState,
  reducers: {
    setBackgroundImage: (state, action: PayloadAction<string | null>) => {
      state.backgroundImage = action.payload;
    },
    setBackgroundColor: (state, action: PayloadAction<string>) => {
      state.backgroundColor = action.payload;
    },
    setBrightness: (state, action: PayloadAction<number>) => {
      state.brightness = action.payload;
    },
    setContrast: (state, action: PayloadAction<number>) => {
      state.contrast = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBackground.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBackground.fulfilled, (state, action) => {
        state.status = "succeeded";
        Object.assign(state, action.payload);
      })
      .addCase(fetchBackground.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setBackgroundImage, setBackgroundColor, setBrightness, setContrast } = backgroundSlice.actions;
export default backgroundSlice.reducer;
