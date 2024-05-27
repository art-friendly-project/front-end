import PosterSwiper from './PosterSwiper';
import { homeShows } from 'mock/mockData';

const BannerSection = () => {
  return (
    <div className="w-full h-80">
      <PosterSwiper posters={homeShows} />
    </div>
  );
};

export default BannerSection;
