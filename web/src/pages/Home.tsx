import { useEffect } from 'react';
import { useAppDispatch } from 'hooks';
import { endpointActions } from 'store/modules/endpoint';
import BannerSection from 'components/home/main/bannerSection/BannerSection';
import NearbyShowInfoSection from 'components/home/main/nearbyShowSection/NearbyShowSection';
import TasteTestSeciton from 'components/home/main/tasteSection/TasteTestSeciton';
import PopularShowSection from 'components/home/main/popularShowSection/PopularShowSection';
import DeadlineShowSection from 'components/home/main/deadlineShowSection/DeadlineShowSection';
import api from 'api';
import Footer from 'components/footer/Footer';
import { useQuery } from '@tanstack/react-query';

const Home = () => {
  const dispatch = useAppDispatch();

  const getMember = async () => {
    const res = await api.get('/members');
    return res.data.data;
  };

  const { data } = useQuery({
    queryKey: ['user', 'member'],
    queryFn: getMember,
    staleTime: 30 * 60 * 1000,
  });

  localStorage.setItem('myId', String(data?.id));

  useEffect(() => {
    dispatch(endpointActions.current('/home'));
  }, [endpointActions]);

  return (
    <div className="flex flex-col w-full h-full">
      <BannerSection />
      <NearbyShowInfoSection />
      <TasteTestSeciton />
      <PopularShowSection />
      <DeadlineShowSection />
      <Footer />
    </div>
  );
};

export default Home;
