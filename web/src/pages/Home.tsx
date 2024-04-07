import BannerSection from 'components/home/main/banner/BannerSection';
import NearbyShowInfoSection from 'components/home/main/nearbyShow/NearbyShowSection';
import PopularShowSection from 'components/home/main/popularShow/PopularShowSection';
import DeadlineShowSection from 'components/home/main/deadlineShow/DeadlineShowSection';
import IsTestCheck from 'components/home/main/taste/IsTestCheck';

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
