import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BackgroundState } from "../types/backgroundTypes";
import { fetchBackgroundData} from "./backgroundThunk";

const initialState: BackgroundState = {
  backgroundImage: null,
  backgroundColor: "#000000",
  brightness: 1,
  contrast: 1,
  animationType: "none", // ✅ Новое поле для анимации
  animationColor: "#ffffff",
//   status: "idle",
};

const backgroundSlice = createSlice({
  name: "background",
  initialState,
  reducers: {
    setAnimationColor: (state, action: PayloadAction<string>) => {
      state.animationColor = action.payload;
    },
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
    setAnimationType: (state, action: PayloadAction<string>) => {
      state.animationType = action.payload; // ✅ Сохраняем выбранную анимацию
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBackgroundData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBackgroundData.fulfilled, (state, action) => {
        state.status = "succeeded";
        Object.assign(state, action.payload);
      })
      .addCase(fetchBackgroundData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setAnimationColor, setBackgroundImage, setBackgroundColor, setBrightness, setContrast, setAnimationType } =
  backgroundSlice.actions;
export default backgroundSlice.reducer;
