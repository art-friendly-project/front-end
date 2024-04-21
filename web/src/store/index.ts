import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './modules/location';
import toastReducer from './modules/toast';
import isTestReducer from './modules/isTest';
import endpointReducer from './modules/endpoint';
import tasteTestReducer from './modules/tasteTest';
import isPostEmptyReducer from './modules/isPostEmpty';

const store = configureStore({
  reducer: {
    location: locationReducer,
    toast: toastReducer,
    isTest: isTestReducer,
    endpoint: endpointReducer,
    tasteTest: tasteTestReducer,
    isPostEmpty: isPostEmptyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
