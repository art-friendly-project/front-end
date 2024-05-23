import { useEffect, useState } from 'react';
import NoReview from './NoReview';
import ReviewContainer from './ReviewContainer';
import api from 'api';

interface reviewSection {
  id: number;
}

const ReviewSection = ({ id }: reviewSection) => {
  const [reviews, setReviews] = useState<review[]>([]);
  const [page, setPage] = useState(0);

  console.log(reviews);

  const fetchReviews = async () => {
    try {
      const result: fetchReview = await api.get(
        `/dambyeolags/lists?exhibitionId=${id}&page=${page}&sortType=popular`,
      );
      setReviews(result.data.data.content);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    void fetchReviews();
  }, [id]);

  return (
    <div className="relative flex flex-col items-center w-full pt-10 mb-10">
      {reviews.length === 0 ? (
        <NoReview id={id} />
      ) : (
        <ReviewContainer id={id} reviews={reviews} setPage={setPage} />
      )}
    </div>
  );
};

export default ReviewSection;
