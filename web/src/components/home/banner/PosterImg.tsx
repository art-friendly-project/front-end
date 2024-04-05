import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import PosterInfo from './PosterInfo';

interface posterImg {
  idx: number;
  image: string;
  term: string;
  name: string;
  place: string;
  location: string;
  posterLength: number;
}

const PosterImg = ({
  idx,
  image,
  term,
  name,
  place,
  location,
  posterLength,
}: posterImg) => {
  return (
    <li className="relative inline-block w-full h-full">
      <label
        htmlFor={String((idx - 1 + posterLength) % posterLength)}
        className="absolute top-[8.5rem] z-10"
      >
        <IoIosArrowBack className="w-10 h-10 text-white opacity-50" />
      </label>
      <div className="absolute w-full bg-gradient-to-t h-80 from-neutral-900" />
      <img className="w-full h-full bg-white object-fit" src={image} />
      <label
        htmlFor={String((idx + 1 + posterLength) % posterLength)}
        className="absolute top-[8.5rem] right-1 z-10"
      >
        <IoIosArrowForward className="w-10 h-10 text-white opacity-50" />
      </label>
      <PosterInfo term={term} name={name} place={place} location={location} />
    </li>
  );
};

export default PosterImg;
