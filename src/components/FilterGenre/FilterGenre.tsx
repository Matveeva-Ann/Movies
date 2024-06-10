import { Dispatch, SetStateAction } from 'react';
import FilterSelect from '../FilterSelect/FilterSelect';

interface FilterGenreProps {
  setSearchParams: Dispatch<SetStateAction<object>>;
}

export default function FilterGenre({ setSearchParams }: FilterGenreProps) {
  const genreArr = ['any genre', 'action', 'comedy', 'drama', 'thriller'];

  const handleCheckboxChange = (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const formValues = Object.values(Object.fromEntries(formData));
    setSearchParams(prevState => ({ ...prevState, genre: formValues }));
  };

  return (
    <FilterSelect selectName="Genre">
      <form onChange={(e) => handleCheckboxChange(e)}>
        {genreArr.map(genre => (
          <div key={genre}>
            <input type="checkbox" id={genre} name={genre} value={genre} /> <label htmlFor={genre}>{genre}</label>
          </div>
        ))}
      </form>
    </FilterSelect>
  );
}
