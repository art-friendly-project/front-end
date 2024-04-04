import SlideRadioInput from './SlideRadioInputList';
import PosterImgList from './PosterImgList';

interface posterImgSlide {
  currentPosterNum: string;
  setCurrentPosterNum: React.Dispatch<React.SetStateAction<string>>;
  posterImgs: string[];
}

const PosterImgSlide = ({
  currentPosterNum,
  setCurrentPosterNum,
  posterImgs,
}: posterImgSlide) => {
  return (
    <>
      <SlideRadioInput
        currentPosterNum={currentPosterNum}
        setCurrentPosterNum={setCurrentPosterNum}
        posterImgs={posterImgs}
      />
      <div className="w-full overflow-hidden h-80 whitespace-nowrap">
        <PosterImgList
          posterImgs={posterImgs}
          currentPosterNum={currentPosterNum}
        />
      </div>
    </>
  );
};

export default PosterImgSlide;
