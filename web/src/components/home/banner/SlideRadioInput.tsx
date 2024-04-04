interface slideRadioInput {
  posterNum: string;
  currentPosterNum: string;
  setCurrentPosterNum: React.Dispatch<React.SetStateAction<string>>;
}

const SlideRadioInput = ({
  posterNum,
  currentPosterNum,
  setCurrentPosterNum,
}: slideRadioInput) => {
  return (
    <input
      type="radio"
      id={posterNum}
      value={posterNum}
      className="hidden"
      checked={currentPosterNum === posterNum}
      onChange={(e) => {
        setCurrentPosterNum(e.target.value);
      }}
    />
  );
};

export default SlideRadioInput;
