import BannerSection from 'components/home/banner/BannerSection';
import NearbyShowInfoSection from 'components/home/nearbyShow/NearbyShowSection';
import PopularShowSection from 'components/home/popularShow/PopularShowSection';
import DeadlineShowSection from 'components/home/deadlineShow/DeadlineShowSection';
import IsTestCheck from 'components/home/taste/IsTestCheck';

const Home = () => {
  return (
    <div className="relative w-full overflow-y-scroll h-41/50 scrollbar-hide">
      <BannerSection />
      <NearbyShowInfoSection />
      <IsTestCheck />
      <PopularShowSection />
      <DeadlineShowSection />
    </div>
  );
};

export default Home;
