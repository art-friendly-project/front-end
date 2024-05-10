import Review from 'components/profile/viewedShowAndReviews/Review';
import { userData } from 'mock/mockData';
import LikeEmptyMessage from './LikeEmptyMessage';
import { useEffect, useState } from 'react';

const SavedReviewSection = () => {
  const [reviews, setReviews] = useState<myReview[]>([]);

  useEffect(() => {
    setReviews(userData[0].reviews);
  }, []);

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-wrap w-9/10">
        {reviews.length === 0 ? (
          <LikeEmptyMessage text="아직 저장한 담벼락이 없어요." />
        ) : (
          reviews.map((review, idx) => (
            <Review
              key={review.id}
              id={review.id}
              idx={idx}
              showId={review.showId}
              image={review.image}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SavedReviewSection;
