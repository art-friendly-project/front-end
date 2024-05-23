import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type RootState } from 'store';

interface StateType {
  showId: number;
}

const initialState: StateType = {
  showId: 0,
};

export const showIdSlice = createSlice({
  name: 'showId',
  initialState,
  reducers: {
    current: (state, action: PayloadAction<number>) => {
      state.showId = action.payload;
    },
  },
});

export const showIdActions = showIdSlice.actions;
export const selectShowId = (state: RootState) => state.showId.showId;
export default showIdSlice.reducer;
