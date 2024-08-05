import { Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'style/swiper.css';

import GradientBackground from './GradientBackground';
import PosterImg from 'components/common/PosterImg';
import PosterInfo from './PosterInfo';
import api from 'api';
import PosterLoading from './PosterLoading';
import { useQuery } from '@tanstack/react-query';

const PosterSwiper = () => {
  const getPopularShows = async () => {
    const res = await api.get('/exhibitions/lists/popular');
    return res.data.data;
  };

  const { data, isLoading } = useQuery<popularShow[]>({
    queryKey: ['shows', 'popular'],
    queryFn: getPopularShows,
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) {
    return <PosterLoading />;
  }

  return (
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
      {data
        ?.filter((_, i) => i >= 3 && i <= 5)
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
  );
};

export default PosterSwiper;
