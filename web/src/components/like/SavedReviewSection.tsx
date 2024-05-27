import Review from 'components/profile/viewedShowAndReviews/Review';
import LikeEmptyMessage from './LikeEmptyMessage';
import { useEffect, useRef, useState } from 'react';
import api from 'api';

const SavedReviewSection = () => {
  const [reviews, setReviews] = useState<savedReview[]>([]);
  const [page, setPage] = useState(0);

  const bottomRef = useRef<HTMLDivElement>(null);

  const fetchSavedReviews = async () => {
    const result: fetchSavedReviews = await api.get(
      `dambyeolags/lists/bookmarks?page=${page}`,
    );

    setReviews((prev) => [...prev, ...result.data.data.content]);
  };
  useEffect(() => {
    void fetchSavedReviews();
  }, [page]);

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      setPage((prev) => prev + 1);
    }
  });

  useEffect(() => {
    const observeBottomRef = () => {
      if (bottomRef.current !== null) observer.observe(bottomRef.current);
    };

    const timeoutId = setTimeout(observeBottomRef, 500);

    return () => {
      clearTimeout(timeoutId);
      if (bottomRef.current !== null) observer.unobserve(bottomRef.current);
    };
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
              imageUrl={review.exhibitionImageUrl}
            />
          ))
        )}
        <div className="h-2" ref={bottomRef} />
      </div>
    </div>
  );
};

export default SavedReviewSection;
