import { Pagination, Scrollbar, Autoplay } from 'swiper/modules';
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

const PosterSwiper = () => {
  const [shows, setShows] = useState<popularShow[]>([]);

  const fetchShows = async () => {
    try {
      const result: fetchPopularShow = await api.get(
        '/exhibitions//lists/popular',
      );

      setShows(result.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    void fetchShows();
  }, []);

  return (
    <Swiper
      className="bannerSwiper"
      modules={[Pagination, Scrollbar, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: false }}
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
              height="h-80"
              bgColor="bg-white"
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
  );
};

export default PosterSwiper;
