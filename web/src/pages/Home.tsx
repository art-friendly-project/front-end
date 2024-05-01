import BannerSection from 'components/home/main/bannerSection/BannerSection';
import NearbyShowInfoSection from 'components/home/main/nearbyShowSection/NearbyShowSection';
import PopularShowSection from 'components/home/main/popularShowSection/PopularShowSection';
import DeadlineShowSection from 'components/home/main/deadlineShowSection/DeadlineShowSection';
import IsTestCheck from 'components/home/main/tasteSection/IsTestCheck';
import { useEffect } from 'react';
import { useAppDispatch } from 'hooks';
import { endpointActions } from 'store/modules/endpoint';

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(endpointActions.current('/home'));
  }, [endpointActions]);

  return (
    <div className="flex flex-col w-full h-full">
      <BannerSection />
      <NearbyShowInfoSection />
      <IsTestCheck />
      <PopularShowSection />
      <DeadlineShowSection />
    </div>
  );
};

export default Home;
