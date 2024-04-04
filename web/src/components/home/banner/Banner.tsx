import { useState } from 'react';
import posterExample1 from '../../../assets/example/posterExample1.png';
import posterExample2 from '../../../assets/example/posterExample2.png';
import posterExample3 from '../../../assets/example/posterExample3.png';
import PosterImgSlide from './PosterImgSlide';
import PosterInfo from './PosterInfo';
import PosterNum from './PosterNum';

const BannerSection = () => {
  const [currentPosterNum, setCurrentPosterNum] = useState('0');
  const posterImgs = [posterExample1, posterExample2, posterExample3];

  return (
    <div>
      <PosterImgSlide
        currentPosterNum={currentPosterNum}
        setCurrentPosterNum={setCurrentPosterNum}
        posterImgs={posterImgs}
      />
      <PosterInfo />
      <PosterNum
        currentPosterNum={currentPosterNum}
        posterImgsLength={posterImgs.length}
      />
    </div>
  );
};

export default BannerSection;
