import BannerSection from 'components/home/main/bannerSection/BannerSection';
import NearbyShowInfoSection from 'components/home/main/nearbyShowSection/NearbyShowSection';
import PopularShowSection from 'components/home/main/popularShowSection/PopularShowSection';
import DeadlineShowSection from 'components/home/main/deadlineShowSection/DeadlineShowSection';
import IsTestCheck from 'components/home/main/tasteSection/IsTestCheck';
import { useEffect } from 'react';
import { useAppDispatch } from 'hooks';
import { endpointActions } from 'store/modules/endpoint';
import useGeolocation from 'hooks/useGeolocation';
import useReverseLocation from 'hooks/useReverseLocation';
import isApp from 'utils/isApp';

const Home = () => {
  const dispatch = useAppDispatch();

  const { geolocation } = useGeolocation();
  useReverseLocation(geolocation);

  useEffect(() => {
    if (isApp()) {
      window.ReactNativeWebView?.postMessage(
        JSON.stringify({ type: 'LOCATION_PERMISSION' }),
      );
    }
  }, []);

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
