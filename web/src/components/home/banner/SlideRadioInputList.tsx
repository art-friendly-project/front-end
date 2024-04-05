import { type poster } from './PosterImgSlide';
import SlideRadioInput from './SlideRadioInput';

interface slideRadioInputList {
  currentPosterNum: string;
  setCurrentPosterNum: React.Dispatch<React.SetStateAction<string>>;
  posters: poster[];
}

const SlideRadioInputList = ({
  currentPosterNum,
  setCurrentPosterNum,
  posters,
}: slideRadioInputList) => {
  return (
    <div>
      {posters.map((poster, idx) => (
        <SlideRadioInput
          key={poster.id}
          posterNum={String(idx)}
          currentPosterNum={currentPosterNum}
          setCurrentPosterNum={setCurrentPosterNum}
        />
      ))}
    </div>
  );
};

export default SlideRadioInputList;
