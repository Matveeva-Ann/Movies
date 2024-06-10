import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export interface ParamsState {
  genre: string[];
  rating: string[];
}

export const paramsSlice = createSlice({
  name: 'paramsSlice',
  initialState: { genre: [], rating: [] } as ParamsState,
  reducers: {
    genreParams(state, action) {
      return {
        ...state,
        genre: action.payload,
      };
    },
    ratingParams(state, action) {
      return {
        ...state,
        rating: action.payload,
      };
    },
  },
});

const persistConfig = {
  key: 'params',
  storage,
};

export const { genreParams, ratingParams } = paramsSlice.actions;
export const persistedReducer = persistReducer(persistConfig, paramsSlice.reducer);
