import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type RootState } from 'store';

interface StateType {
  showsLocation: string;
}

const initialState: StateType = {
  showsLocation: '서울',
};

export const showsLocationSlice = createSlice({
  name: 'showsLocation',
  initialState,
  reducers: {
    current: (state, action: PayloadAction<string>) => {
      state.showsLocation = action.payload;
    },
  },
});

export const showsLocationActions = showsLocationSlice.actions;
export const selectShowsLocation = (state: RootState) =>
  state.showsLocation.showsLocation;
export default showsLocationSlice.reducer;
