import { useEffect, useState } from 'react';
import { Grid, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/grid';
import 'style/reviewSwiper.css';
import ReviewSectionTitle from './ReviewSectionTitle';
import ReviewPostBtn from './ReviewPostBtn';
import Review from './Review';

interface reviewList {
  reviews: review[];
}

export interface review {
  id?: number;
  title: string;
  content: string;
  createdAt: string;
  user: {
    id: number;
    nickName: string;
    profileImage: string;
  };
}

const ReviewContainer = ({ reviews }: reviewList) => {
  const [reviewSlice, setReviewSlice] = useState<review[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setReviewSlice(reviews.slice(0, 8));
  }, []);

  const pagination = {
    clickable: false,
    dynamicBullets: true,
    renderBullet: function (index: number, className: string) {
      return `<span class="${className}"></span>`;
    },
  };

  return (
    <>
      <ReviewPostBtn />
      <ReviewSectionTitle />
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
        pagination={pagination}
        scrollbar={{ draggable: true, hide: true }}
      >
        {reviewSlice.map((review) => (
          <SwiperSlide key={review.id}>
            <Review review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default ReviewContainer;
