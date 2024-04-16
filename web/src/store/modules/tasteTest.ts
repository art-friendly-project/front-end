import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type RootState } from 'store';

interface StateType {
  result: number[];
}

const initialState: StateType = {
  result: [],
};

export const tasteTestSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    push: (state, action: PayloadAction<number>) => {
      state.result = [...state.result, action.payload];
    },
    clear: (state) => {
      state.result = [];
    },
  },
});

export const tasteTestActions = tasteTestSlice.actions;
export const selectTasteTest = (state: RootState) => state.tasteTest.result;
export default tasteTestSlice.reducer;
