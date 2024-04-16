import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './modules/location';
import toastReducer from './modules/toast';

const store = configureStore({
  reducer: {
    location: locationReducer,
    toast: toastReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
