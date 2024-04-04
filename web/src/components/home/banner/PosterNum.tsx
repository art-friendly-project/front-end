interface posterNum {
  currentPosterNum: string;
  posterImgsLength: number;
}

const PosterNum = ({ currentPosterNum, posterImgsLength }: posterNum) => {
  return (
    <div className="absolute top-[17.5rem] right-4 z-20">
      <span className="text-orange-100 text-Body3">
        {Number(currentPosterNum) + 1}
      </span>
      <span className="text-white text-Body3">{` / ${posterImgsLength}`}</span>
    </div>
  );
};

export default PosterNum;
