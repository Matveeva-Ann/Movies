import { createSlice } from '@reduxjs/toolkit';
import { Movie } from '../../types/movie';

const initialState: Movie[] = [];

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    allMovies(_, { payload }) {
      return payload;
    }
  },
});

export const { allMovies } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;