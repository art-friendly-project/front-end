import ReviewSectionTitle from './ReviewSectionTitle';
import ReviewPostBtn from './ReviewPostBtn';
import ReviewSwiper from './ReviewSwiper';
import { type Dispatch, type SetStateAction } from 'react';

interface reviewList {
  id: number;
  reviews: review[];
  setPage: Dispatch<SetStateAction<number>>;
  hasDambyeolagWritten: boolean;
}

const ReviewContainer = ({
  id,
  reviews,
  setPage,
  hasDambyeolagWritten,
}: reviewList) => {
  return (
    <>
      <ReviewPostBtn id={id} hasDambyeolagWritten={hasDambyeolagWritten} />
      <ReviewSectionTitle />
      <ReviewSwiper reviews={reviews} setPage={setPage} />
    </>
  );
};
export default ReviewContainer;
