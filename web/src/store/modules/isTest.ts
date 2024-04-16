import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type RootState } from 'store';

interface StateType {
  isTest: boolean;
}

const initialState: StateType = {
  isTest: false,
};

export const isTestSlice = createSlice({
  name: 'isTest',
  initialState,
  reducers: {
    setIsTest: (state, action: PayloadAction<boolean>) => {
      state.isTest = action.payload;
    },
  },
});

export const isTestActions = isTestSlice.actions;
export const selectIsTest = (state: RootState) => state.isTest.isTest;
export default isTestSlice.reducer;
