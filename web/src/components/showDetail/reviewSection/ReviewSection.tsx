import { useEffect, useState } from 'react';
import NoReview from './NoReview';
import ReviewContainer from './ReviewContainer';
import api from 'api';
import ReviewSectionTitle from './ReviewSectionTitle';
import ReviewPostBtn from './ReviewPostBtn';

interface reviewSection {
  id: number;
  hasDambyeolagWritten: boolean;
}

const ReviewSection = ({ id, hasDambyeolagWritten }: reviewSection) => {
  const [reviews, setReviews] = useState<review[]>([]);
  const [page, setPage] = useState(0);

  const fetchReviews = async () => {
    try {
      const result: fetchReview = await api.get(
        `/dambyeolags/lists?exhibitionId=${id}&page=${page}&sortType=popular`,
      );
      setReviews((prev) => [...prev, ...result.data.data.content]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    void fetchReviews();
  }, [id, page]);

  return (
    <div className="relative flex flex-col items-center w-full pt-6 mb-10">
      <ReviewSectionTitle />
      <ReviewPostBtn id={id} hasDambyeolagWritten={hasDambyeolagWritten} />
      {reviews.length === 0 ? (
        <NoReview id={id} />
      ) : (
        <ReviewContainer reviews={reviews} setPage={setPage} />
      )}
    </div>
  );
};

export default ReviewSection;
