import { useState } from 'react';
import FilterGenre from '../../components/FilterGenre/FilterGenre';
import FilterRating from '../../components/FilterRating/FilterRating';
import Search from '../../components/Search/Search';
import { HomeBg, HomeWrapper } from './Home.style';

export default function Home() {
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [isGenreOpen, setIsGenreOpen] = useState(false);

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
        <Search></Search>
        <FilterRating
          isRatingOpen={isRatingOpen}
          setIsRatingOpen={toggleRating}
        ></FilterRating>
        <FilterGenre
          isGenreOpen={isGenreOpen}
          setIsGenreOpen={toggleGenre}
        ></FilterGenre>
      </HomeWrapper>
    </HomeBg>
  );
}
