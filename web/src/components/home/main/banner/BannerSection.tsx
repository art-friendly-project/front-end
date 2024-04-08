import { useEffect, useState } from 'react';
import PosterSlide from './PosterSlide';
import PosterNum from './PosterNum';
import { homeShows } from 'mock/mockData';

const BannerSection = () => {
  const [currentPosterNum, setCurrentPosterNum] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPosterNum(
        (prev) => (prev + 1 + homeShows.length) % homeShows.length,
      );
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [homeShows]);

  return (
    <div className="relative">
      <PosterSlide
        currentPosterNum={currentPosterNum}
        setCurrentPosterNum={setCurrentPosterNum}
        posters={homeShows}
      />
      <PosterNum
        currentPosterNum={currentPosterNum}
        posterLength={homeShows.length}
      />
    </div>
  );
};

export default BannerSection;
