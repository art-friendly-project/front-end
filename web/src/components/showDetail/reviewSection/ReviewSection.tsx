import NoReview from './NoReview';
import ReviewContainer from './ReviewContainer';
import api from 'api';
import ReviewSectionTitle from './ReviewSectionTitle';
import ReviewPostBtn from './ReviewPostBtn';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';

interface reviewSection {
  id: number;
  hasDambyeolagWritten: boolean;
}

const ReviewSection = ({ id, hasDambyeolagWritten }: reviewSection) => {
  const [totalPages, setTotalPages] = useState(0);

  const getReviews = async (page: number, id: number) => {
    const res: fetchReview = await api.get(
      `/dambyeolags/lists?exhibitionId=${id}&page=${page}&sortType=popular`,
    );
    setTotalPages(res.data.data.totalPages);
    return res.data.data.content;
  };

  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ['show', 'reviews', id],
    queryFn: async ({ pageParam }) => {
      return await getReviews(pageParam, id);
    },
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      const nextPage = lastPageParam + 1;
      if (nextPage < totalPages) {
        return nextPage;
      }
    },
    initialPageParam: 0,
    gcTime: 0,
  });

  const reviews = data?.pages.reduce((prev, next) => {
    return prev.concat(next);
  });

  if (reviews === undefined) {
    return <></>;
  }

  return (
    <div className="relative flex flex-col items-center w-full pt-6 mb-10">
      <ReviewSectionTitle />
      <ReviewPostBtn id={id} hasDambyeolagWritten={hasDambyeolagWritten} />
      {reviews.length === 0 ? (
        <NoReview id={id} />
      ) : (
        <ReviewContainer reviews={reviews} fetchNextPage={fetchNextPage} />
      )}
    </div>
  );
};

export default ReviewSection;
