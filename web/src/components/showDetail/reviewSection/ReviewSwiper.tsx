import { useEffect, useState } from 'react';
import { Grid, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Review from './Review';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/grid';
import 'style/reviewSwiper.css';
import { type review } from './ReviewContainer';

interface reviewSwiper {
  reviews: review[];
}

const ReviewSwiper = ({ reviews }: reviewSwiper) => {
  const [reviewSlice, setReviewSlice] = useState<review[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setReviewSlice(reviews.slice(0, 8));
  }, []);

  return (
    <Swiper
      className="reviewSwiper"
      modules={[Pagination, Scrollbar, Grid]}
      spaceBetween={20}
      slidesPerView={2}
      onReachEnd={() => {
        setReviewSlice((prev) => [
          ...prev,
          ...reviews.slice(8 * page, 8 + 8 * page),
        ]);
        setPage((prev) => prev + 1);
      }}
      grid={{
        rows: 2,
      }}
      pagination={{ clickable: false, dynamicBullets: true }}
      scrollbar={{ draggable: true, hide: true }}
    >
      {reviewSlice.map((review) => (
        <SwiperSlide key={review.id}>
          <Review review={review} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewSwiper;
