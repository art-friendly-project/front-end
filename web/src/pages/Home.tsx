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

const Home = () => {
  const dispatch = useAppDispatch();

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
    localStorage.setItem(
      'accessToken',
      'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImF1ZCI6IjEiLCJpYXQiOjE3MTg1ODU0MDMsImV4cCI6MTcxODYzNjM5OX0.6f943ysGDq6PSTo8uEk3vLKmGkOc127JxPPf66YokgP1hpr0RF-f6z2TXm5wL5l486eNmVh9ZABr5Ab3vaHr9A',
    );
    localStorage.setItem(
      'refreshToken',
      'eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3MTg1ODU0MDMsImV4cCI6MTcyMTE3NzQwM30.3clD6wGsxTL4MZJjBq69GRNx6WY33aOPjyL_RUCky6JRJXWC-pY2jrE1ezfcegAIseDDchbIVIID9WwwuqdTNw',
    );

    void fetchUserId();
  }, [myId]);

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
