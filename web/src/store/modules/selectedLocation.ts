import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type RootState } from 'store';

interface StateType {
  selectedLocation: string;
}

const initialState: StateType = {
  selectedLocation: '서울',
};

export const selectedLocationSlice = createSlice({
  name: 'selectedLocation',
  initialState,
  reducers: {
    current: (state, action: PayloadAction<string>) => {
      state.selectedLocation = action.payload;
    },
  },
});

export const selectedLocationActions = selectedLocationSlice.actions;
export const selectSelectedLocation = (state: RootState) =>
  state.selectedLocation.selectedLocation;
export default selectedLocationSlice.reducer;
