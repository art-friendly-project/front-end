import { useEffect, useState } from 'react';
import { useAppDispatch } from 'hooks';
import { endpointActions } from 'store/modules/endpoint';
import BannerSection from 'components/home/main/bannerSection/BannerSection';
import NearbyShowInfoSection from 'components/home/main/nearbyShowSection/NearbyShowSection';
import TasteTestSeciton from 'components/home/main/tasteSection/TasteTestSeciton';
import PopularShowSection from 'components/home/main/popularShowSection/PopularShowSection';
import DeadlineShowSection from 'components/home/main/deadlineShowSection/DeadlineShowSection';
import api from 'api';
import Footer from 'components/footer/Footer';
import ShowDetail from './ShowDetail';
import isApp from 'utils/isApp';

const Home = () => {
  const dispatch = useAppDispatch();
  const [showId, setShowId] = useState(0);

  useEffect(() => {
    if (isApp()) {
      const modalColse = (e: MessageEvent<string>) => {
        const data: {
          url: string;
        } = JSON.parse(e.data);

        if (data.url === '/home') {
          if (showId === 0) {
            window.ReactNativeWebView?.postMessage(
              JSON.stringify({ type: 'APP_CLOSE' }),
            );

            return;
          }

          if (showId !== 0) {
            setShowId(0);
          }
        }
      };

      if (window.platform === 'android') {
        document.addEventListener('message', modalColse);
      }

      if (window.platform === 'ios') {
        window.addEventListener('message', modalColse);
      }

      return () => {
        if (window.platform === 'android') {
          document.removeEventListener('message', modalColse);
        }

        if (window.platform === 'ios') {
          window.removeEventListener('message', modalColse);
        }
      };
    }
  }, [showId]);

  const fetchUserId = async () => {
    try {
      const userData: fetchUser = await api.get('/members');
      localStorage.setItem('myId', String(userData.data.data.id));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    void fetchUserId();
  }, []);

  useEffect(() => {
    dispatch(endpointActions.current('/home'));
  }, [endpointActions]);

  return (
    <div className="flex flex-col w-full h-full">
      {showId !== 0 ? (
        <ShowDetail showId={showId} setShowId={setShowId} />
      ) : null}
      <BannerSection setShowId={setShowId} />
      <NearbyShowInfoSection />
      <TasteTestSeciton />
      <PopularShowSection setShowId={setShowId} />
      <DeadlineShowSection setShowId={setShowId} />
      <Footer />
    </div>
  );
};

export default Home;
