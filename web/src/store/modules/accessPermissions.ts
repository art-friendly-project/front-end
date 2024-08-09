import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type RootState } from 'store';

interface StateType {
  accessPermissions: {
    location: string;
    calendar: string;
    images: string;
    notifications: string;
  };
}

const initialState: StateType = {
  accessPermissions: {
    location: 'blocked',
    calendar: 'blocked',
    images: 'blocked',
    notifications: 'blocked',
  },
};

export const accessPermissionsSlice = createSlice({
  name: 'accessPermissions',
  initialState,
  reducers: {
    current: (
      state,
      action: PayloadAction<{
        calendar: string;
        images: string;
        notifications: string;
      }>,
    ) => {
      state.accessPermissions = Object.assign(
        state.accessPermissions,
        action.payload,
      );
    },
  },
});

export const accessPermissionsActions = accessPermissionsSlice.actions;
export const selectAccessPermissions = (state: RootState) =>
  state.accessPermissions.accessPermissions;
export default accessPermissionsSlice.reducer;
