import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type RootState } from 'store';

interface StateType {
  closeNavigate: string;
}

const initialState: StateType = {
  closeNavigate: '/home',
};

export const closeNavigateSlice = createSlice({
  name: 'closeNavigate',
  initialState,
  reducers: {
    setCloseNavigate: (state, action: PayloadAction<string>) => {
      state.closeNavigate = action.payload;
    },
  },
});

export const closeNavigateActions = closeNavigateSlice.actions;
export const selectCloseNavigate = (state: RootState) =>
  state.closeNavigate.closeNavigate;
export default closeNavigateSlice.reducer;
