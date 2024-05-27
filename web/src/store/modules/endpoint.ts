import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type RootState } from 'store';

interface StateType {
  endpoint: string;
}

const initialState: StateType = {
  endpoint: '/home',
};

export const endpointSlice = createSlice({
  name: 'endpoint',
  initialState,
  reducers: {
    current: (state, action: PayloadAction<string>) => {
      state.endpoint = action.payload;
    },
  },
});

export const endpointActions = endpointSlice.actions;
export const selectEndpoint = (state: RootState) => state.endpoint.endpoint;
export default endpointSlice.reducer;
