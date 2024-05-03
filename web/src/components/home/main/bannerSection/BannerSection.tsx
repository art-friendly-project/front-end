import PosterSlide from './PosterSlide';
import { homeShows } from 'mock/mockData';

const BannerSection = () => {
  return (
    <div className="w-full h-80">
      <PosterSlide posters={homeShows} />
    </div>
  );
};

export default BannerSection;
