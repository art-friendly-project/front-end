import { Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import GradientBackground from './GradientBackground';
import PosterImg from 'components/common/PosterImg';
import PosterInfo from './PosterInfo';

interface posterSwiper {
  posters: poster[];
}

export interface poster {
  id: number;
  term: string;
  name: string;
  place: string;
  location: string;
  image: string;
}

const PosterSwiper = ({ posters }: posterSwiper) => {
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
      loop={true}
    >
      {posters.map((poster) => (
        <SwiperSlide key={poster.id}>
          <GradientBackground />
          <PosterImg
            width="w-full"
            height="h-80"
            bgColor="bg-white"
            image={poster.image}
          />
          <PosterInfo
            id={poster.id}
            term={poster.term}
            name={poster.name}
            place={poster.place}
            location={poster.location}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PosterSwiper;
