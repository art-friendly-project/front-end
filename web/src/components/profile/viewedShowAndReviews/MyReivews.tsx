import { useEffect, useState } from 'react';
import Review from './Review';
import { myReviews } from 'mock/mockData';

const MyReivews = () => {
  const [reviews, setReviews] = useState<myReview[]>([]);

  useEffect(() => {
    setReviews(myReviews);
  }, [myReviews]);

  console.log(reviews);

  return (
    <div className="flex justify-center w-full mt-8">
      <div className="flex flex-wrap w-9/10">
        {reviews.map((review, idx) => (
          <Review key={review.id} idx={idx} image={review.image} />
        ))}
      </div>
    </div>
  );
};

export default MyReivews;
