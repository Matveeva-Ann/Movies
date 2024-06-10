import { Dispatch, SetStateAction } from 'react';
import FilterSelect from '../FilterSelect/FilterSelect';
import { GenreLabel } from './FilterGenre.style';
import { useDispatch, useSelector } from 'react-redux';
import { ParamsState, genreParams } from '../../redux/paramsSlice';

interface FilterGenreProps {
  setSearchParams: Dispatch<SetStateAction<object>>;
  setIsGenreOpen: ()=>void;
  isGenreOpen: boolean;
}

export default function FilterGenre({ setSearchParams, setIsGenreOpen, isGenreOpen }: FilterGenreProps) {
  const genreArr = ['any genre', 'action', 'comedy', 'drama', 'thriller'];
  const selectedGenres = useSelector((state: ParamsState) => state.genre);
  const dispatch = useDispatch();
  
  const handleCheckboxChange = (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const formValues = Object.values(Object.fromEntries(formData));
    setSearchParams(prevState => ({ ...prevState, genre: formValues }));   
    dispatch(genreParams(formValues));
  };

  return (
    <FilterSelect selectName="Genre" isOpen={isGenreOpen} setIsOpen={setIsGenreOpen}>
      <form onChange={(e) => handleCheckboxChange(e)}>
        {genreArr.map(genre => (
          <div key={genre}>
            <input type="checkbox" id={genre} name={genre} value={genre} defaultChecked={selectedGenres?.includes(genre)} /><GenreLabel htmlFor={genre}>{genre}</GenreLabel>
          </div>
        ))}
      </form>
    </FilterSelect>
  );
}
