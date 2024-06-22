import ReviewSwiper from './ReviewSwiper';
import { type Dispatch, type SetStateAction } from 'react';

interface reviewList {
  reviews: review[];
  setPage: Dispatch<SetStateAction<number>>;
}

const ReviewContainer = ({ reviews, setPage }: reviewList) => {
  return <ReviewSwiper reviews={reviews} setPage={setPage} />;
};
export default ReviewContainer;
