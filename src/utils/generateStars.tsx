import { IoIosStar, IoIosStarOutline } from 'react-icons/io';

export function generateStars(count: number) { 
  return Array.from({ length: 10 }, (_, index) =>
    count > index ? <IoIosStar key={index} /> : <IoIosStarOutline key={index} />
  );
}
