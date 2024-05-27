import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type RootState } from 'store';

interface StateType {
  withdrawalReason: number;
}

const initialState: StateType = {
  withdrawalReason: 0,
};

export const withdrawalReasonSlice = createSlice({
  name: 'withdrawalReason',
  initialState,
  reducers: {
    current: (state, action: PayloadAction<number>) => {
      state.withdrawalReason = action.payload;
    },
  },
});

export const withdrawalReasonActions = withdrawalReasonSlice.actions;
export const selectWithdrawalReason = (state: RootState) =>
  state.withdrawalReason.withdrawalReason;
export default withdrawalReasonSlice.reducer;
