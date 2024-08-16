import api from 'api';
import { useState } from 'react';
import {
  type FetchNextPageOptions,
  type InfiniteData,
  type InfiniteQueryObserverResult,
  useInfiniteQuery,
} from '@tanstack/react-query';

export const useGetMyReviews = (
  userId: number,
  myId: number,
): {
  myReviews: savedReview[] | undefined;
  fetchNextPage: (options?: FetchNextPageOptions) => Promise<
    InfiniteQueryObserverResult<
      InfiniteData<
        Array<{
          id: number;
          exhibitionImageUrl: string;
        }>,
        unknown
      >,
      Error
    >
  >;
} => {
  const [totalPages, setTotalPage] = useState(0);

  let currentId: number = userId;
  if (userId === 0) currentId = myId;

  const getMyReviews = async (page: number, id: number) => {
    const res: fetchSavedReviews = await api.get(
      `/dambyeolags/lists/by-member?page=${page}&memberId=${id}`,
    );

    setTotalPage(res.data.data.totalPages);
    return res.data.data.content;
  };

  const { data, fetchNextPage, error, isError } = useInfiniteQuery({
    queryKey: ['myReview', currentId],
    queryFn: async ({ pageParam }) => await getMyReviews(pageParam, currentId),
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      const nextPage = lastPageParam + 1;
      if (nextPage < totalPages) {
        return nextPage;
      }
    },
    initialPageParam: 0,
    enabled: !!currentId,
    staleTime: 5 * 60 * 1000,
  });

  const myReviews = data?.pages.reduce((prev, next) => {
    return prev.concat(next);
  });

  if (isError) {
    console.error(error);
  }

  return { myReviews, fetchNextPage };
};
