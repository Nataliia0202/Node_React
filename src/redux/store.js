import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { phonebookUserReducer } from './slices/userSlice';
import { phonebookContactsReducer } from './slices/contactsSlice';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['token'],
};

export const persistedUserReducer = persistReducer(
  persistConfig,
  phonebookUserReducer
);

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    contacts: phonebookContactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
