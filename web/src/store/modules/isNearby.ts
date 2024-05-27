import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type RootState } from 'store';

interface StateType {
  isNearby: boolean;
}

const initialState: StateType = {
  isNearby: false,
};

export const isNearbySlice = createSlice({
  name: 'isNearby',
  initialState,
  reducers: {
    current: (state, action: PayloadAction<boolean>) => {
      state.isNearby = action.payload;
    },
  },
});

export const isNearbyActions = isNearbySlice.actions;
export const selectIsNearby = (state: RootState) => state.isNearby.isNearby;
export default isNearbySlice.reducer;
