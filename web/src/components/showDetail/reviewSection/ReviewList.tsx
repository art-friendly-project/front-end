import Review from './Review';
import { type review } from './ReviewContainer';

interface reviewList {
  reviews: review[];
}

const ReviewList = ({ reviews }: reviewList) => {
  return (
    <div className="inline-block w-full">
      <div className="flex flex-wrap justify-center w-full pl-6">
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
