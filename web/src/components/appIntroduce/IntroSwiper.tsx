import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar } from 'swiper/modules';
import IntroMain from 'components/appIntroduce/IntroMain';
import IntroFirst from 'components/appIntroduce/IntroFirst';
import IntroSecond from 'components/appIntroduce/IntroSecond';
import IntroThird from 'components/appIntroduce/IntroThird';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'style/swiper.css';

const introPages = [
  <IntroMain key={0} />,
  <IntroFirst key={1} />,
  <IntroSecond key={2} />,
  <IntroThird key={3} />,
];

const IntroSwiper = () => {
  return (
    <Swiper
      className="introSwiper"
      modules={[Pagination, Scrollbar]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: false }}
      scrollbar={{ draggable: true, hide: true }}
    >
      {introPages.map((page, idx) => (
        <SwiperSlide key={idx}>{page}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default IntroSwiper;
