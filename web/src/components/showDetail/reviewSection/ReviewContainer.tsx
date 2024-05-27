import ReviewSectionTitle from './ReviewSectionTitle';
import ReviewPostBtn from './ReviewPostBtn';
import ReviewSwiper from './ReviewSwiper';
import { type Dispatch, type SetStateAction } from 'react';

interface reviewList {
  id: number;
  reviews: review[];
  setPage: Dispatch<SetStateAction<number>>;
}

const ReviewContainer = ({ id, reviews, setPage }: reviewList) => {
  return (
    <>
      <ReviewPostBtn id={id} />
      <ReviewSectionTitle />
      <ReviewSwiper reviews={reviews} setPage={setPage} />
    </>
  );
};
export default ReviewContainer;
