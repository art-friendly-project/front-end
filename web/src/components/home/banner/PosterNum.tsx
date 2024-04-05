interface posterNum {
  currentPosterNum: string;
  posterLength: number;
}

const PosterNum = ({ currentPosterNum, posterLength }: posterNum) => {
  return (
    <div className="absolute top-[17.5rem] right-4 z-20">
      <span className="text-orange-100 text-Body3">
        {Number(currentPosterNum) + 1}
      </span>
      <span className="text-white text-Body3">{` / ${posterLength}`}</span>
    </div>
  );
};

export default PosterNum;
