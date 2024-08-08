import api from 'api';
import { useState } from 'react';
import { useGetMember } from './useGetMember';
import {
  type FetchNextPageOptions,
  type InfiniteData,
  type InfiniteQueryObserverResult,
  useInfiniteQuery,
} from '@tanstack/react-query';

export const useGetMyReviews = (
  userId: number,
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

  const myId = useGetMember().id;

  const getMyReviews = async (page: number, id: number) => {
    const res: fetchSavedReviews = await api.get(
      `/dambyeolags/lists/by-member?page=${page}&memberId=${id}`,
    );

    setTotalPage(res.data.data.totalPages);
    return res.data.data.content;
  };

  const { data, fetchNextPage, error, isError } = useInfiniteQuery({
    queryKey: ['myReview', userId === 0 ? myId : userId],
    queryFn: async ({ pageParam }) =>
      await getMyReviews(pageParam, userId === 0 ? myId : userId),
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      const nextPage = lastPageParam + 1;
      if (nextPage < totalPages) {
        return nextPage;
      }
    },
    initialPageParam: 0,
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
