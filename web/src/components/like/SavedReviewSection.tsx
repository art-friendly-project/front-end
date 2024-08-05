import Review from 'components/profile/viewedShowAndReviews/Review';
import LikeEmptyMessage from './LikeEmptyMessage';
import { useEffect, useRef, useState } from 'react';
import api from 'api';
import PageLoadingSpineer from 'components/list/PageLoadingSpineer';
import { useInfiniteQuery } from '@tanstack/react-query';

const SavedReviewSection = () => {
  const [totalPages, setTotalPages] = useState(0);

  const bottomRef = useRef<HTMLDivElement>(null);

  const getSavedReviews = async (page: number) => {
    const res: fetchSavedReviews = await api.get(
      `dambyeolags/lists/bookmarks?page=${page}`,
    );
    setTotalPages(res.data.data.totalPages);
    return res.data.data.content;
  };

  const { data, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: ['review', 'saved'],
    queryFn: async ({ pageParam }) => {
      return await getSavedReviews(pageParam);
    },
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      const nextPage = lastPageParam + 1;
      if (nextPage < totalPages) {
        return nextPage;
      }
    },
    initialPageParam: 0,
    staleTime: 5 * 60 * 1000,
  });

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
