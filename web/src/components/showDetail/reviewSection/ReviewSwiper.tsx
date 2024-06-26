import { type Dispatch, type SetStateAction } from 'react';
import { Grid, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Review from './Review';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/grid';
import 'style/swiper.css';

interface reviewSwiper {
  reviews: review[];
  setPage: Dispatch<SetStateAction<number>>;
}

const ReviewSwiper = ({ reviews, setPage }: reviewSwiper) => {
  return (
    <Swiper
      className="reviewSwiper"
      modules={[Scrollbar, Grid]}
      spaceBetween={20}
      slidesPerView={2}
      onReachEnd={() => {
        setPage((prev) => prev + 1);
      }}
      grid={{
        rows: 2,
      }}
      scrollbar={{ draggable: true, hide: true }}
    >
      {reviews.map((review) => (
        <SwiperSlide key={review.id}>
          <Review review={review} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewSwiper;
