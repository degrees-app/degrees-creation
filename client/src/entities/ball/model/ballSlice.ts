import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { BallArrayType, BallObjectType, ParamsObjectType } from '../types/ballTypes';
import { CreateBallCard, fetchBallCards, FindOneBall } from './ballThunk';

type ballSliceType = {
  ball: BallArrayType;
  oneball: BallObjectType;
  params: ParamsObjectType;
  currentPage: number;
  loading: boolean;
  error: string | null;
};

const initialState: ballSliceType = {
  ball: [],
  currentPage: 1,
  params: {
    'width (px)': 5,
    color: 0x4080ff,
    shape: 'Sphere',
    opacity: 1.0,
    author: '',
  } as ParamsObjectType,
  oneball: {} as BallObjectType,
  loading: false,
  error: null,
};

export const ballSlice = createSlice({
  name: 'ball',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBallCards.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchBallCards.fulfilled,
        (state, action: PayloadAction<BallArrayType>) => {
          state.loading = false;
          state.ball = action.payload.map((b) => ({ ...b, id: b.id || Math.random() }));
        },
      )
      .addCase(fetchBallCards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(CreateBallCard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        CreateBallCard.fulfilled,
        (state, action: PayloadAction<BallObjectType>) => {
          state.loading = false;
          state.oneball = action.payload;
        },
      )
      .addCase(CreateBallCard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(FindOneBall.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FindOneBall.fulfilled, (state, action: PayloadAction<BallObjectType>) => {
        state.loading = false;
        state.oneball = action.payload;
        state.error = null;
        
      })
      .addCase(FindOneBall.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default ballSlice.reducer;
export const { setCurrentPage } = ballSlice.actions;
