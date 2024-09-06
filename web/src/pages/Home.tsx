import { useEffect } from 'react';
import { useAppDispatch } from 'hooks';
import { endpointActions } from 'store/modules/endpoint';
import BannerSection from 'components/home/main/bannerSection/BannerSection';
import TasteTestSeciton from 'components/home/main/tasteSection/TasteTestSeciton';
import PopularShowSection from 'components/home/main/popularShowSection/PopularShowSection';
import DeadlineShowSection from 'components/home/main/deadlineShowSection/DeadlineShowSection';
import Footer from 'components/footer/Footer';
import LocationShowSection from 'components/home/main/locationShowSection/LocationShowSection';
import { useGetPopularShows } from 'hooks/query/useGetPopularShows';
import { useGetEndShows } from 'hooks/query/useGetEndShows';
import SearchGallerySection from 'components/home/main/searchGallerySection/SearchGallerySection';

const Home = () => {
  const dispatch = useAppDispatch();

  const { popularShowData, isPopularShowLoading } = useGetPopularShows();
  const { endShowData, isEndShowLoading } = useGetEndShows();

  useEffect(() => {
    dispatch(endpointActions.current('/home'));
  }, [endpointActions]);

  return (
    <div className="flex flex-col w-full h-full">
      <BannerSection
        popularShowData={popularShowData}
        isPopularShowLoading={isPopularShowLoading}
      />
      <LocationShowSection />
      <SearchGallerySection />
      <TasteTestSeciton />
      <PopularShowSection
        popularShowData={popularShowData}
        isPopularShowLoading={isPopularShowLoading}
      />
      <DeadlineShowSection
        endShowData={endShowData}
        isEndShowLoading={isEndShowLoading}
      />
      <Footer />
    </div>
  );
};

export default Home;
