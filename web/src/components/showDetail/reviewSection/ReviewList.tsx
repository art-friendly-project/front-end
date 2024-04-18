import Review from './Review';
import { type review } from './ReviewContainer';

interface reviewList {
  reviews: review[];
}

const ReviewList = ({ reviews }: reviewList) => {
  const sliceReviews = reviews.slice(0, 4);

  return (
    <div className="flex flex-wrap justify-center w-full pl-6">
      {sliceReviews.map((review) => (
        <Review key={review.id} title={review.title} content={review.content} />
      ))}
    </div>
  );
};

export default ReviewList;
