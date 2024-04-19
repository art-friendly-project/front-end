import { reviewDatas } from 'mock/mockData';
import NoReview from './NoReview';
import ReviewContainer from './ReviewContainer';

interface reviewSection {
  id: number;
}

const ReviewSection = ({ id }: reviewSection) => {
  const reviews = reviewDatas[id];

  return (
    <div className="relative flex flex-col items-center w-full pt-10 mb-10 overflow-hidden">
      {reviews.length === 0 ? (
        <NoReview />
      ) : (
        <ReviewContainer reviews={reviews} />
      )}
    </div>
  );
};

export default ReviewSection;
