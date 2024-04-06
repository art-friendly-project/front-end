import { useEffect, useState } from 'react';
import posterExample1 from '../../../assets/example/posterExample1.png';
import posterExample2 from '../../../assets/example/posterExample2.png';
import posterExample3 from '../../../assets/example/posterExample3.png';
import PosterImgSlide from './PosterImgSlide';
import PosterNum from './PosterNum';

const BannerSection = () => {
  const [currentPosterNum, setCurrentPosterNum] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPosterNum(
        (prev) => (prev + 1 + posters.length) % posters.length,
      );
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [posters]);

  return (
    <div>
      <PosterImgSlide
        currentPosterNum={currentPosterNum}
        setCurrentPosterNum={setCurrentPosterNum}
        posters={posters}
      />
      <PosterNum
        currentPosterNum={currentPosterNum}
        posterLength={posters.length}
      />
    </div>
  );
};

const posters = [
  {
    id: 1,
    term: '24.03.01 ~ 24.06.01',
    name: 'Body, Love, Gender',
    place: '가나아트센터',
    location: '서울',
    image: posterExample1,
  },
  {
    id: 2,
    term: '24.03.02 ~ 24.06.02',
    name: '멋진 전시회',
    place: '다라아트센터',
    location: '인천',
    image: posterExample2,
  },
  {
    id: 3,
    term: '24.03.03 ~ 24.06.03',
    name: '아름다운 전시회',
    place: '마바아트센터',
    location: '광주',
    image: posterExample3,
  },
];

export default BannerSection;
