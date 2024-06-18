import { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';
import { containingFilter } from '../../utils/filters/containingFilter';
import { Filter, FilterType } from './interfaces';
import { contextFilter } from '../../utils/filters/contextFilter';

export const selectorGenre = (state: RootState) => state.filters.genre;
export const selectorRating = (state: RootState) => state.filters.ratings;
export const selectorContext = (state: RootState) => state.filters.searchText;
export const selectorMovies = (state: RootState) => state.movies;

export const selectFilteredFilms = createSelector(
  [selectorMovies, selectorGenre, selectorRating, selectorContext],
  (movies, genre, ratings, context) => {
    if (genre.value.length === 0 && ratings.value.length === 0 && context.value.length === 0) {
      return movies;
    }

    const filterParams: Filter[] = [genre, ratings, context];

    return filterParams.reduce((accum, filter: Filter) => {
      switch (filter.type) {
        case FilterType.Containing:
          return containingFilter(accum, filter.value as [], filter.fieldName);
        case FilterType.Contextual:
          return contextFilter(accum, filter.value as string);
        default:
          return accum;
      }
    }, movies);
  }
);
