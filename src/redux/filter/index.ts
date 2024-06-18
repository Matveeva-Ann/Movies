import { createSlice } from '@reduxjs/toolkit';
import { Filter, FilterType } from './interfaces';

export interface State {
  genre: Filter;
  ratings: Filter;
  searchText: Filter;
}

const initialState: State = {
  genre: {
    type: FilterType.Containing,
    fieldName: 'genre',
    value: [],
  },
  ratings: {
    type: FilterType.Containing,
    fieldName: 'ratings',
    value: [],
  },
  searchText: {
    type: FilterType.Contextual,
    fieldName: 'title',
    value: '' as string,
  }
};

export const paramsSlice = createSlice({
  name: 'paramsSlice',
  initialState,
  reducers: {
    genreParams(state, { payload }) {
      return {
        ...state,
        genre: {
          ...state.genre,
          value: payload,
        },
      };
    },
    ratingParams(state, { payload }) {
      return {
        ...state,
        ratings: {
          ...state.ratings,
          value: payload,
        },
      };
    },
    contextParams(state, { payload }) {     
      return {
        ...state,
        searchText: {
          ...state.searchText,
          value: payload,
        },
      };
    },
  },
});


export const { genreParams, ratingParams, contextParams } = paramsSlice.actions;
export const filterReducer = paramsSlice.reducer;
