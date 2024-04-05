import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface posterImg {
  idx: number;
  posterImg: string;
  posterImgLength: number;
}

const PosterImg = ({ idx, posterImg, posterImgLength }: posterImg) => {
  return (
    <li className="relative inline-block w-full h-full">
      <label
        htmlFor={String((idx - 1 + posterImgLength) % posterImgLength)}
        className="absolute top-[8.5rem] z-10"
      >
        <IoIosArrowBack className="w-10 h-10 text-white opacity-50" />
      </label>
      <div className="absolute w-full bg-gradient-to-t h-80 from-neutral-900" />
      <img className="w-full h-full bg-white object-fit" src={posterImg} />
      <label
        htmlFor={String((idx + 1 + posterImgLength) % posterImgLength)}
        className="absolute top-[8.5rem] right-1 z-10"
      >
        <IoIosArrowForward className="w-10 h-10 text-white opacity-50" />
      </label>
    </li>
  );
};

export default PosterImg;
