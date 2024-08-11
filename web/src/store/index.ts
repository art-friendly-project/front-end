import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';

import locationReducer from './modules/location';
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

const reducers = combineReducers({
  location: locationReducer,
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
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['location'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
