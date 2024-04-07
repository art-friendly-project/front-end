import BannerSection from 'components/home/main/banner/BannerSection';
import NearbyShowInfoSection from 'components/home/main/nearbyShow/NearbyShowSection';
import PopularShowSection from 'components/home/main/popularShow/PopularShowSection';
import DeadlineShowSection from 'components/home/main/deadlineShow/DeadlineShowSection';
import IsTestCheck from 'components/home/main/taste/IsTestCheck';

const Home = () => {
  return (
    <>
      <BannerSection />
      <NearbyShowInfoSection />
      <IsTestCheck />
      <PopularShowSection />
      <DeadlineShowSection />
    </>
  );
};

export default Home;
