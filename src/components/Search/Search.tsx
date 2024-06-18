'use client';

import { useEffect, useRef, useState } from 'react';
import { Input, MoviesContainer, SearchWrapper } from './Search.style';
import { getMovies } from '../../api/movies';
import { Movie } from '../../types/movie';
import MovieItem from '../MovieItem/MovieItem';
import NotFound from '../notFound/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredFilms, selectorContext } from '../../redux/filter/selectors';
import { allMovies } from '../../redux/movies';
import { contextParams } from '../../redux/filter';


export default function Search() {
  const [isInFocus, setIsInFocus] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const inputText = useSelector(selectorContext);
  const [inputValue, setInputValue] = useState<string>(inputText.value as string || '');
  const refInput = useRef<HTMLInputElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const visibleMovies = useSelector(selectFilteredFilms);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoaded) {
      fetchMovies();
    }
  }, [isInFocus]);

  async function fetchMovies() {
    try {
      const data = await getMovies();
      dispatch(allMovies(data));
      setIsLoaded(true);
    } catch (e) {
      console.log(e);
    }
  }

  function debouncedCallback(callback: () => void, delay: number) {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      callback();
    }, delay);
  }

  function filterMovies() {
    const searchText = refInput.current?.value?.trim().toLowerCase() || '';
    dispatch(contextParams(searchText))
  }

  return (
    <SearchWrapper>
      <Input
        ref={refInput}
        placeholder="Enter movie name"
        onChange={(e) => {setInputValue(e.target.value); debouncedCallback(filterMovies, 500)}}
        onFocus={() => setIsInFocus(true)}
        value={inputValue}
      />
      {isInFocus && (
        <MoviesContainer>
          {visibleMovies && visibleMovies.length === 0 && <NotFound></NotFound>}
          {visibleMovies.map((elem: Movie) => (
            <MovieItem item={elem} key={elem.id}></MovieItem>
          ))}
        </MoviesContainer>
      )}
    </SearchWrapper>
  );
}
