import { Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'style/swiper.css';

import GradientBackground from './GradientBackground';
import PosterImg from 'components/common/PosterImg';
import PosterInfo from './PosterInfo';
import { useEffect, useState } from 'react';
import api from 'api';
import PosterLoading from './PosterLoading';

const PosterSwiper = () => {
  const [shows, setShows] = useState<popularShow[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchShows = async () => {
    try {
      const result: fetchPopularShow = await api.get(
        '/exhibitions/lists/popular',
      );
      setLoading(true);
      setShows(result.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    void fetchShows();
  }, []);

  return (
    <>
      {loading ? (
        <Swiper
          className="bannerSwiper"
          modules={[Scrollbar, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          scrollbar={{ draggable: true, hide: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {shows
            .filter((_, i) => i >= 3 && i <= 5)
            .map((show) => (
              <SwiperSlide key={show.exhibitionId}>
                <GradientBackground />
                <PosterImg
                  width="w-full"
                  height="h-96"
                  bgColor="bg-white"
                  rounded="rounded-none"
                  image={show.imageUrl}
                />
                <PosterInfo
                  id={show.exhibitionId}
                  startDate={show.startDate}
                  endDate={show.endDate}
                  title={show.title}
                  place={show.place}
                  location={show.area}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      ) : (
        <PosterLoading />
      )}
    </>
  );
};

export default PosterSwiper;
