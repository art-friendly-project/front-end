import { type Dispatch, type SetStateAction } from 'react';
import PosterSwiper from './PosterSwiper';

interface bannerSection {
  setShowId: Dispatch<SetStateAction<number>>;
}

const BannerSection = ({ setShowId }: bannerSection) => {
  return (
    <div className="w-full">
      <PosterSwiper setShowId={setShowId} />
    </div>
  );
};

export default BannerSection;
