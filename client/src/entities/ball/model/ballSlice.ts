import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { BallArrayType} from '../types/ballTypes';
import { CreateBallCard, fetchBallCards, FindOneBall } from './ballThunk';

type ballSliceType = {
  ball: BallArrayType;
  loading: boolean;
  error: string | null;
};

const initialState: ballSliceType = {
  ball: [],
  loading: false,
  error: null,
};

export const ballSlice = createSlice({
  name: 'ball',
  initialState,
  reducers: {},
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
          state.ball = action.payload;
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
        (state, action: PayloadAction<BallArrayType>) => {
          state.loading = false;
          state.ball = action.payload;
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
      .addCase(FindOneBall.fulfilled, (state, action: PayloadAction<BallArrayType>) => {
        state.loading = false;
        state.ball = action.payload;
      })
      .addCase(FindOneBall.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default ballSlice.reducer;
