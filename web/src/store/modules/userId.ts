import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type RootState } from 'store';

interface StateType {
  userId: number;
}

const initialState: StateType = {
  userId: 0,
};

export const userIdSlice = createSlice({
  name: 'userId',
  initialState,
  reducers: {
    current: (state, action: PayloadAction<number>) => {
      state.userId = action.payload;
    },
  },
});

export const userIdActions = userIdSlice.actions;
export const selectUserId = (state: RootState) => state.userId.userId;
export default userIdSlice.reducer;
