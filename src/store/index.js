import { configureStore,combineReducers } from '@reduxjs/toolkit'
import { persistReducer,persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { logger } from 'redux-logger';
import studentSlice from './studentSlice';
import userSlice from './userSlice';


const persistConfig = {
  key: 'root',
  storage,
}


const rootReducer = combineReducers({ 
student:studentSlice,
user:userSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export const persistor = persistStore(store)