import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type RootState } from 'store';

interface StateType {
  toast: boolean[];
}

const initialState: StateType = {
  toast: [false, false],
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    setToast: (state, action: PayloadAction<boolean>) => {
      state.toast[0] = action.payload;
    },

    setIsFavorite: (state, action: PayloadAction<boolean>) => {
      state.toast[1] = action.payload;
    },
  },
});

export const toastActions = toastSlice.actions;
export const selectToast = (state: RootState) => state.toast.toast;
export default toastSlice.reducer;
