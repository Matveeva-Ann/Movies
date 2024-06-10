import { Dispatch, SetStateAction } from 'react';
import { generateStars } from '../../utils/generateStars';
import FilterSelect from '../FilterSelect/FilterSelect';

interface FilterRatingProps {
  setSearchParams: Dispatch<SetStateAction<object>>;
}

export default function FilterRating({setSearchParams}: FilterRatingProps) {

  const handleCheckboxChange = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const formDataValues = Object.values(Object.fromEntries(formData));   
    setSearchParams(prevState => ({...prevState, rating: formDataValues}))
  };

  return (
    <FilterSelect selectName="Rating" >
      <form id='ratingForm' onChange={(e)=>handleCheckboxChange(e)}>
          <div>
            <input type="checkbox" id='checkbox' value='any'/>
            <label htmlFor='checkbox'>Any rating</label>
          </div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
          <div key={item}>
            <input type="checkbox" id={`checkbox-${item}`} name={`checkbox-${item}`} value={item}/>
            <label htmlFor={`checkbox-${item}`}>{generateStars(item)}</label>
          </div>
        ))}
      </form>
    </FilterSelect>
  );
}
