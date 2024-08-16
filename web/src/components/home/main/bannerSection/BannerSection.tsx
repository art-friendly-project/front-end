import PosterSwiper from './PosterSwiper';

interface bannerSection {
  popularShowData: popularShow[] | undefined;
  isPopularShowLoading: boolean;
}

const BannerSection = ({
  popularShowData,
  isPopularShowLoading,
}: bannerSection) => {
  return (
    <div className="w-full">
      <PosterSwiper
        popularShowData={popularShowData}
        isPopularShowLoading={isPopularShowLoading}
      />
    </div>
  );
};

export default BannerSection;
