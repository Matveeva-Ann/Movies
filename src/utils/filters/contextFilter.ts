import { Movie } from "../../types/movie";


export function contextFilter(movies: Movie[], searchParam: string) {
  if (typeof searchParam !== 'string') {
    return movies;
  }

  if (!searchParam.trim()) {
    return movies;
  }

  return movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchParam.trim().toLowerCase())
  );
}
