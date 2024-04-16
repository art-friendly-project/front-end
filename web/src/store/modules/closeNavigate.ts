import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type RootState } from 'store';

interface StateType {
  nav: string;
}

const initialState: StateType = {
  nav: '/home',
};

export const closeNavigateSlice = createSlice({
  name: 'closeNavigate',
  initialState,
  reducers: {
    current: (state, action: PayloadAction<string>) => {
      state.nav = action.payload;
    },
  },
});

export const closeNavigateActions = closeNavigateSlice.actions;
export const selectCloseNavigate = (state: RootState) =>
  state.closeNavigate.nav;
export default closeNavigateSlice.reducer;
