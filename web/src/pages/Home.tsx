import { useEffect } from 'react';
import { useAppDispatch } from 'hooks';
import { endpointActions } from 'store/modules/endpoint';
import BannerSection from 'components/home/main/bannerSection/BannerSection';

import TasteTestSeciton from 'components/home/main/tasteSection/TasteTestSeciton';
import PopularShowSection from 'components/home/main/popularShowSection/PopularShowSection';
import DeadlineShowSection from 'components/home/main/deadlineShowSection/DeadlineShowSection';
import Footer from 'components/footer/Footer';
import LocationShowSection from 'components/home/main/locationShowSection/LocationShowSection';

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(endpointActions.current('/home'));
  }, [endpointActions]);

  return (
    <div className="flex flex-col w-full h-full">
      <BannerSection />
      <LocationShowSection />
      <TasteTestSeciton />
      <PopularShowSection />
      <DeadlineShowSection />
      <Footer />
    </div>
  );
};

export default Home;
