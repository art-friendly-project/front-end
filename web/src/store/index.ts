import { configureStore } from '@reduxjs/toolkit';
import showsLocationReducer from './modules/showsLocation';
import toastReducer from './modules/toast';
import isTestReducer from './modules/isTest';
import endpointReducer from './modules/endpoint';
import tasteTestReducer from './modules/tasteTest';
import isModalReducer from './modules/isModal';
import isReviewTextReducer from './modules/isReviewText';
import accessPermissionsReducer from './modules/accessPermissions';
import isNearbyReducer from './modules/isNearby';
import toastTextReducer from './modules/toastText';
import userIdReducer from './modules/userId';
import showIdReducer from './modules/showId';
import withdrawalReasonReducer from './modules/withdrawalReason';

const store = configureStore({
  reducer: {
    showsLocation: showsLocationReducer,
    toast: toastReducer,
    isTest: isTestReducer,
    endpoint: endpointReducer,
    tasteTest: tasteTestReducer,
    isModal: isModalReducer,
    isReviewText: isReviewTextReducer,
    accessPermissions: accessPermissionsReducer,
    isNearby: isNearbyReducer,
    toastText: toastTextReducer,
    userId: userIdReducer,
    showId: showIdReducer,
    withdrawalReason: withdrawalReasonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
