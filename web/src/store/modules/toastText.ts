import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type RootState } from 'store';

interface StateType {
  toastText: string[];
}

const initialState: StateType = {
  toastText: ['', ''],
};

export const toastTextSlice = createSlice({
  name: 'toastText',
  initialState,
  reducers: {
    current: (state, action: PayloadAction<string[]>) => {
      state.toastText = action.payload;
    },
  },
});

export const toastTextActions = toastTextSlice.actions;
export const selectToastText = (state: RootState) => state.toastText.toastText;
export default toastTextSlice.reducer;
