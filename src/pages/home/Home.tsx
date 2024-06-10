import { useEffect, useState } from 'react';
import FilterGenre from '../../components/FilterGenre/FilterGenre';
import FilterRating from '../../components/FilterRating/FilterRating';
import Search from '../../components/Search/Search';
import { HomeBg, HomeWrapper } from './Home.style';
import { useSelector } from 'react-redux';
import { ParamsState } from '../../redux/paramsSlice';

export default function Home() {
  const initialParams = useSelector((state: ParamsState) => state);
  const [searchParams, setSearchParams] = useState({});
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [isGenreOpen, setIsGenreOpen] = useState(false);

  useEffect(() => {
    setSearchParams({ ...initialParams });
  }, [initialParams]);

  const toggleRating = () => {
    setIsRatingOpen(prev => !prev);
    setIsGenreOpen(false);
  };

  const toggleGenre = () => {
    setIsGenreOpen(prev => !prev);
    setIsRatingOpen(false);
  };

  function closeFilter(e: React.MouseEvent) {
    if (e.target === e.currentTarget) {
      setIsRatingOpen(false);
      setIsGenreOpen(false);
    }
  }

  return (
    <HomeBg onClick={e => closeFilter(e)}>
      <HomeWrapper onClick={e => closeFilter(e)}>
        <Search searchParams={searchParams}></Search>
        <FilterRating
          setSearchParams={setSearchParams}
          isRatingOpen={isRatingOpen}
          setIsRatingOpen={toggleRating}
        ></FilterRating>
        <FilterGenre
          setSearchParams={setSearchParams}
          isGenreOpen={isGenreOpen}
          setIsGenreOpen={toggleGenre}
        ></FilterGenre>
      </HomeWrapper>
    </HomeBg>
  );
}
