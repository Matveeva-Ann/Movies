'use client';

import { useEffect, useRef, useState } from 'react';
import { Input, MoviesContainer, SearchWrapper } from './Search.style';
import { getMovies } from '../../api/movies';
import { Movie } from '../../types/movie';
import MovieItem from '../MovieItem/MovieItem';

interface SearchParams {
  rating?: Array<string>;
  genre?: Array<string>;
}

interface SearchProps {
  searchParams: SearchParams;
}

export default function Search({ searchParams }: SearchProps) {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [isInFocus, setIsInFocus] = useState(false);
  const refInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchMovies();
  }, [isInFocus]);

  async function fetchMovies() {
    try {
      const data = await getMovies();
      setMovies(data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    filterMovies();
  }, [searchParams, refInput.current?.value, movies]);

  function filterMovies() {
    const searchText = refInput.current?.value?.trim().toLowerCase() || '';

    const filteredByText = searchText
      ? movies.filter((movie: Movie) => movie.title.toLowerCase().includes(searchText))
      : movies;

    const filterByRating =
      searchParams.rating?.length && !searchParams.rating?.includes('any')
        ? filteredByText.filter((movie: Movie) => searchParams.rating?.includes(String(movie.ratings)))
        : filteredByText;

    const filterByGenre =
      searchParams.genre?.length && !searchParams.genre?.includes('any genre')
        ? filterByRating.filter((movie: Movie) => searchParams.genre?.includes(movie.genre.toLowerCase()))
        : filterByRating;

    setFilteredMovies(filterByGenre);
  }

  return (
    <SearchWrapper>
      <Input ref={refInput} placeholder="Enter movie name" onChange={filterMovies} onFocus={() => setIsInFocus(true)} />
      {isInFocus && (
        <MoviesContainer>
          {filteredMovies.map((elem: Movie) => (
            <MovieItem item={elem} key={elem.id}></MovieItem>
          ))}
        </MoviesContainer>
      )}
    </SearchWrapper>
  );
}
