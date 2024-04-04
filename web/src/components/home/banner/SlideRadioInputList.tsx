import SlideRadioInput from './SlideRadioInput';

interface slideRadioInputList {
  currentPosterNum: string;
  setCurrentPosterNum: React.Dispatch<React.SetStateAction<string>>;
  posterImgs: string[];
}

const SlideRadioInputList = ({
  currentPosterNum,
  setCurrentPosterNum,
  posterImgs,
}: slideRadioInputList) => {
  return (
    <div>
      {posterImgs.map((posterImg, idx) => (
        <SlideRadioInput
          key={posterImg}
          posterNum={String(idx)}
          currentPosterNum={currentPosterNum}
          setCurrentPosterNum={setCurrentPosterNum}
        />
      ))}
    </div>
  );
};

export default SlideRadioInputList;
