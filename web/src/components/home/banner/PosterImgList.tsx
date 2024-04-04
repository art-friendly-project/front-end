import PosterImg from './PosterImg';

interface posterImgList {
  posterImgs: string[];
  currentPosterNum: string;
}

const PosterImgList = ({ posterImgs, currentPosterNum }: posterImgList) => {
  const currentPosterSlide = (num: string) => {
    return { transform: `translateX(-${num}00%)` };
  };

  return (
    <ul
      className="w-full h-full duration-500"
      style={currentPosterSlide(currentPosterNum)}
    >
      {posterImgs.map((posterImg, idx) => (
        <PosterImg
          key={posterImg}
          idx={idx}
          posterImg={posterImg}
          posterImgLength={posterImgs.length}
        />
      ))}
    </ul>
  );
};

export default PosterImgList;
