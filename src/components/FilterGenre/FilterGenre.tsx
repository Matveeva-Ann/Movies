import FilterSelect from '../FilterSelect/FilterSelect';
import { GenreLabel } from './FilterGenre.style';
import { useDispatch, useSelector } from 'react-redux';
import { selectorGenre } from '../../redux/filter/selectors';
import { genreParams } from '../../redux/filter';
import { genreArr } from './genreArr';

interface FilterGenreProps {
  setIsGenreOpen: () => void;
  isGenreOpen: boolean;
}

export default function FilterGenre({ setIsGenreOpen, isGenreOpen }: FilterGenreProps) {
  const selectedGenres = useSelector(selectorGenre);
  const dispatch = useDispatch();

  const handleCheckboxChange = (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const formValues = Object.values(Object.fromEntries(formData));
    dispatch(genreParams(formValues));
  };

  return (
    <FilterSelect selectName="Genre" isOpen={isGenreOpen} setIsOpen={setIsGenreOpen}>
      <form onChange={e => handleCheckboxChange(e)}>
        {genreArr.map(genre => (
          <div key={genre}>
            <input
              type="checkbox"
              id={genre}
              name={genre}
              value={genre}
              defaultChecked={selectedGenres?.value.includes(genre)}
            />
            <GenreLabel htmlFor={genre}>{genre}</GenreLabel>
          </div>
        ))}
      </form>
    </FilterSelect>
  );
}
