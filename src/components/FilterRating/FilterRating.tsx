import { generateStars } from '../../utils/generateStars';
import FilterSelect from '../FilterSelect/FilterSelect';
import { useDispatch, useSelector } from 'react-redux';
import { selectorRating } from '../../redux/filter/selectors';
import { ratingParams } from '../../redux/filter';

interface FilterRatingProps {
  isRatingOpen: boolean;
  setIsRatingOpen: ()=>void;
}

export default function FilterRating({setIsRatingOpen, isRatingOpen}: FilterRatingProps) {
  const selectedRating = useSelector(selectorRating);
  const dispatch =useDispatch();

  const handleCheckboxChange = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const formDataValues = Object.values(Object.fromEntries(formData));    
    dispatch(ratingParams(formDataValues))
  };

  return (
    <FilterSelect selectName="Rating" isOpen={isRatingOpen} setIsOpen={setIsRatingOpen}>
      <form id='ratingForm' onChange={(e)=>handleCheckboxChange(e)}>
          <div>
            <input type="checkbox" id='checkbox' name='any' value='any' defaultChecked={selectedRating?.value.includes('any')}/>
            <label htmlFor='checkbox'>Any rating</label>
          </div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
          <div key={item}>
            <input type="checkbox" id={`checkbox-${item}`} name={`checkbox-${item}`} value={item} defaultChecked={selectedRating?.value.includes(String(item))}/>
            <label htmlFor={`checkbox-${item}`}>{generateStars(item)}</label>
          </div>
        ))}
      </form>
    </FilterSelect>
  );
}
