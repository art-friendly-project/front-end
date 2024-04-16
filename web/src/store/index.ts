import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './modules/location';
import toastReducer from './modules/toast';
import isTestReducer from './modules/isTest';
import closeNavigateReducer from './modules/closeNavigate';

const store = configureStore({
  reducer: {
    location: locationReducer,
    toast: toastReducer,
    isTest: isTestReducer,
    closeNavigate: closeNavigateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
