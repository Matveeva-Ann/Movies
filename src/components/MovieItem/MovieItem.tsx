import { Movie } from '../../types/movie';
import { generateStars } from '../../utils/generateStars';
import { MovieItemGenre, MovieItemTitle, MovieItemTop, MovieItemWrapper } from './MovieItem.style';

interface MovieItemProps {
  item: Movie;
}

export default function MovieItem({ item }: MovieItemProps) {

  return (
    <MovieItemWrapper>
      <MovieItemTop>
        <MovieItemTitle>{item.title}</MovieItemTitle>
        <MovieItemGenre>{item.genre}</MovieItemGenre>
      </MovieItemTop>

      <div>{generateStars(item.ratings)}</div>
    </MovieItemWrapper>
  );
}
