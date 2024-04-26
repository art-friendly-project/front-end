import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type RootState } from 'store';

interface StateType {
  isModal: boolean;
}

const initialState: StateType = {
  isModal: false,
};

export const isModalSlice = createSlice({
  name: 'isModal',
  initialState,
  reducers: {
    setIsModal: (state, action: PayloadAction<boolean>) => {
      state.isModal = action.payload;
    },
  },
});

export const isModalActions = isModalSlice.actions;
export const selectIsModal = (state: RootState) => state.isModal.isModal;
export default isModalSlice.reducer;
