import BannerSection from 'components/home/main/bannerSection/BannerSection';
import NearbyShowInfoSection from 'components/home/main/nearbyShowSection/NearbyShowSection';
import PopularShowSection from 'components/home/main/popularShowSection/PopularShowSection';
import DeadlineShowSection from 'components/home/main/deadlineShowSection/DeadlineShowSection';
import IsTestCheck from 'components/home/main/tasteSection/IsTestCheck';
import { useEffect } from 'react';
import { useAppDispatch } from 'hooks';
import { endpointActions } from 'store/modules/endpoint';
import isApp from 'utils/isApp';
import { accessPermissionsActions } from 'store/modules/accessPermissions';

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isApp()) {
      window.ReactNativeWebView?.postMessage(
        JSON.stringify({ type: 'ACCESS_PERMISSION' }),
      );

      const accessPermissions = (e: MessageEvent<string>) => {
        const data: {
          permissions: {
            location: string;
            calendar: string;
            images: string;
            notifications: string;
          };
        } = JSON.parse(e.data);

        if (data.permissions !== undefined) {
          dispatch(accessPermissionsActions.current(data.permissions));
        }
      };

      document.addEventListener('message', accessPermissions);

      return () => {
        document.removeEventListener('message', accessPermissions);
      };
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
