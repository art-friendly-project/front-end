import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './modules/location';

const store = configureStore({
  reducer: {
    location: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
