// import { configureStore } from '@reduxjs/toolkit'
// import { rootReducer } from './rootReducer'
// import { baseApi } from './api/baseApi'


// export const store = configureStore({
//   reducer: rootReducer,

//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(baseApi.middleware),
  
// })


// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { baseApi } from './api/baseApi';
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export const persistor = persistStore(store);