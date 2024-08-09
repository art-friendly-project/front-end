import { configureStore } from '@reduxjs/toolkit';
import selectedLocationReducer from './modules/selectedLocation';
import toastReducer from './modules/toast';
import isTestReducer from './modules/isTest';
import endpointReducer from './modules/endpoint';
import tasteTestReducer from './modules/tasteTest';
import isModalReducer from './modules/isModal';
import isReviewTextReducer from './modules/isReviewText';
import accessPermissionsReducer from './modules/accessPermissions';
import toastTextReducer from './modules/toastText';
import userIdReducer from './modules/userId';
import withdrawalReasonReducer from './modules/withdrawalReason';

const store = configureStore({
  reducer: {
    selectedLocation: selectedLocationReducer,
    toast: toastReducer,
    isTest: isTestReducer,
    endpoint: endpointReducer,
    tasteTest: tasteTestReducer,
    isModal: isModalReducer,
    isReviewText: isReviewTextReducer,
    accessPermissions: accessPermissionsReducer,
    toastText: toastTextReducer,
    userId: userIdReducer,
    withdrawalReason: withdrawalReasonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
