import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type RootState } from 'store';

interface StateType {
  location: string;
}

const initialState: StateType = {
  location: '서울',
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
  },
});

export const locationActions = locationSlice.actions;
export const selectLocation = (state: RootState) => state.location.location;
export default locationSlice.reducer;
