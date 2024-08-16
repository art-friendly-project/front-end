import { Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'style/swiper.css';
import GradientBackground from './GradientBackground';
import PosterImg from 'components/common/PosterImg';
import PosterInfo from './PosterInfo';
import PosterLoading from './PosterLoading';

interface posterSwiper {
  popularShowData: popularShow[] | undefined;
  isPopularShowLoading: boolean;
}

const PosterSwiper = ({
  popularShowData,
  isPopularShowLoading,
}: posterSwiper) => {
  if (isPopularShowLoading) {
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
      {popularShowData
        ?.filter((_, i) => i >= 3 && i <= 5)
        .map((show) => (
          <SwiperSlide key={show.exhibitionId}>
            <GradientBackground />
            <PosterImg
              posterStyle="w-full h-96 bg-white rounded-none"
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
