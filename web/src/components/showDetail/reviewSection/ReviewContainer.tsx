import {
  type FetchNextPageOptions,
  type InfiniteData,
  type InfiniteQueryObserverResult,
} from '@tanstack/react-query';
import ReviewSwiper from './ReviewSwiper';

interface reviewList {
  reviews: review[];
  fetchNextPage: (
    options?: FetchNextPageOptions,
  ) => Promise<InfiniteQueryObserverResult<InfiniteData<any, unknown>, Error>>;
}

const ReviewContainer = ({ reviews, fetchNextPage }: reviewList) => {
  return <ReviewSwiper reviews={reviews} fetchNextPage={fetchNextPage} />;
};
export default ReviewContainer;
