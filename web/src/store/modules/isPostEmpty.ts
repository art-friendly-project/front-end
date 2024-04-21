import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type RootState } from 'store';

interface StateType {
  isPostEmpty: boolean;
}

const initialState: StateType = {
  isPostEmpty: false,
};

export const isPostEmptySlice = createSlice({
  name: 'isPostEmpty',
  initialState,
  reducers: {
    check: (state, action: PayloadAction<boolean>) => {
      state.isPostEmpty = action.payload;
    },
  },
});

export const isPostEmptyActions = isPostEmptySlice.actions;
export const selectIsPostEmpty = (state: RootState) =>
  state.isPostEmpty.isPostEmpty;
export default isPostEmptySlice.reducer;
