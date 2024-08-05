import { Grid, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Review from './Review';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/grid';
import 'style/swiper.css';
import {
  type FetchNextPageOptions,
  type InfiniteData,
  type InfiniteQueryObserverResult,
} from '@tanstack/react-query';

interface reviewSwiper {
  reviews: review[];
  fetchNextPage: (
    options?: FetchNextPageOptions,
  ) => Promise<InfiniteQueryObserverResult<InfiniteData<any, unknown>, Error>>;
}

const ReviewSwiper = ({ reviews, fetchNextPage }: reviewSwiper) => {
  return (
    <Swiper
      className="reviewSwiper"
      modules={[Scrollbar, Grid]}
      spaceBetween={20}
      slidesPerView={2}
      onReachEnd={() => {
        void fetchNextPage();
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
