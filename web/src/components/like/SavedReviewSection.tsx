import Review from 'components/profile/viewedShowAndReviews/Review';
import LikeEmptyMessage from './LikeEmptyMessage';
import { useEffect, useRef } from 'react';
import PageLoadingSpineer from 'components/list/PageLoadingSpineer';
import { useGetSavedReviews } from 'hooks/query/useGetSavedReviews';

const SavedReviewSection = () => {
  const bottomRef = useRef<HTMLDivElement>(null);

  const { data, isLoading, fetchNextPage } = useGetSavedReviews();

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      void fetchNextPage();
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

  const savedReviews = data?.pages.reduce((prev, next) => {
    return prev.concat(next);
  });

  if (isLoading || savedReviews === undefined) {
    return <PageLoadingSpineer style="mt-20" />;
  }

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-wrap w-9/10">
        {savedReviews.length === 0 ? (
          <LikeEmptyMessage text="아직 저장한 담벼락이 없어요." />
        ) : (
          savedReviews.map((review, idx) => (
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
