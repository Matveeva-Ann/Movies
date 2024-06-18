import { combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { moviesReducer } from './movies';
import { filterReducer } from './filter';

const persistConfig = {
  key: 'root',
  storage,
};

export const rootReducer = combineReducers({
  movies: moviesReducer,
  filters: filterReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
