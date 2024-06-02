import { useEffect } from 'react';
import { useAppDispatch } from 'hooks';
import { endpointActions } from 'store/modules/endpoint';
import BannerSection from 'components/home/main/bannerSection/BannerSection';
import NearbyShowInfoSection from 'components/home/main/nearbyShowSection/NearbyShowSection';
import TasteTestSeciton from 'components/home/main/tasteSection/TasteTestSeciton';
import PopularShowSection from 'components/home/main/popularShowSection/PopularShowSection';
import DeadlineShowSection from 'components/home/main/deadlineShowSection/DeadlineShowSection';
import api from 'api';

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(endpointActions.current('/home'));
  }, [endpointActions]);

  const fetchUserId = async () => {
    try {
      const userData: fetchUser = await api.get('/members');
      localStorage.setItem('myId', String(userData.data.data.id));
    } catch (err) {
      console.error(err);
    }
  };

  const myId = localStorage.getItem('myId');

  useEffect(() => {
    void fetchUserId();
  }, [myId]);

  return (
    <div className="flex flex-col w-full h-full">
      <BannerSection />
      <NearbyShowInfoSection />
      <TasteTestSeciton />
      <PopularShowSection />
      <DeadlineShowSection />
    </div>
  );
};

export default Home;
