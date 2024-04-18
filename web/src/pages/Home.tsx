import BannerSection from 'components/home/main/bannerSection/BannerSection';
import NearbyShowInfoSection from 'components/home/main/nearbyShowSection/NearbyShowSection';
import PopularShowSection from 'components/home/main/popularShowSection/PopularShowSection';
import DeadlineShowSection from 'components/home/main/deadlineShowSection/DeadlineShowSection';
import IsTestCheck from 'components/home/main/tasteSection/IsTestCheck';

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
