import PosterInfo from './PosterInfo';
import LeftArrowBtn from './LeftArrowBtn';
import RightArrowBtn from './RightArrowBtn';
import GradientBackground from './GradientBackground';
import PosterImg from 'components/common/PosterImg';

interface poster {
  image: string;
  term: string;
  name: string;
  place: string;
  location: string;
  posterLength: number;
  setCurrentPosterNum: React.Dispatch<React.SetStateAction<number>>;
}

const Poster = ({
  image,
  term,
  name,
  place,
  location,
  posterLength,
  setCurrentPosterNum,
}: poster) => {
  return (
    <li className="relative inline-block w-full h-full">
      <LeftArrowBtn
        setCurrentPosterNum={setCurrentPosterNum}
        posterLength={posterLength}
      />
      <GradientBackground />
      <PosterImg
        width="w-full"
        height="h-full"
        bgColor="bg-white"
        image={image}
      />
      <RightArrowBtn
        setCurrentPosterNum={setCurrentPosterNum}
        posterLength={posterLength}
      />
      <PosterInfo term={term} name={name} place={place} location={location} />
    </li>
  );
};

export default Poster;
