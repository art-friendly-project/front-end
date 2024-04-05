import SlideRadioInput from './SlideRadioInputList';
import PosterImgList from './PosterImgList';

interface posterImgSlide {
  currentPosterNum: string;
  setCurrentPosterNum: React.Dispatch<React.SetStateAction<string>>;
  posters: poster[];
}

export interface poster {
  id: string;
  term: string;
  name: string;
  place: string;
  location: string;
  image: string;
}

const PosterImgSlide = ({
  currentPosterNum,
  setCurrentPosterNum,
  posters,
}: posterImgSlide) => {
  return (
    <>
      <SlideRadioInput
        currentPosterNum={currentPosterNum}
        setCurrentPosterNum={setCurrentPosterNum}
        posters={posters}
      />
      <div className="w-full overflow-hidden h-80 whitespace-nowrap">
        <PosterImgList posters={posters} currentPosterNum={currentPosterNum} />
      </div>
    </>
  );
};

export default PosterImgSlide;
