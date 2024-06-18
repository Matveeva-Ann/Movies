import { Movie } from '../../types/movie';

export function containingFilter(movies: Movie[], searchParam: [], searchType: string) {
  if (!searchParam || searchParam.length === 0 || movies.length === 0 || searchParam.includes('any')) {
    return movies;
  }

  return movies.filter((movie: Movie) => searchParam.includes(String(movie[searchType]).toLowerCase()));
}
