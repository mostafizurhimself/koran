import { globalSlice } from './global/globalSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { sidebarSlice } from './sidebar/sidebarSlice';
import { settingSlice } from './settings/settingSlice';

const rootReducer = combineReducers({
  global: globalSlice.reducer,
  sidebar: sidebarSlice.reducer,
  settings: settingSlice.reducer,
});

const persistConfig = {
  timeout: 1000,
  key: 'koran-app',
  storage,
  whitelist: ['global', 'settings'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {products: ProductsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
