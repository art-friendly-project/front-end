import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type RootState } from 'store';

interface StateType {
  isReviewText: boolean;
}

const initialState: StateType = {
  isReviewText: false,
};

export const isReviewTextSlice = createSlice({
  name: 'isReviewText',
  initialState,
  reducers: {
    setIsReviewText: (state, action: PayloadAction<boolean>) => {
      state.isReviewText = action.payload;
    },
  },
});

export const isReviewTextActions = isReviewTextSlice.actions;
export const selectIsReviewText = (state: RootState) =>
  state.isReviewText.isReviewText;
export default isReviewTextSlice.reducer;
