import { useInfiniteQuery } from '@tanstack/react-query';
import api from 'api';
import { useState } from 'react';

export const useGetReviews = (id: number) => {
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
    staleTime: 5 * 60 * 1000,
  });

  return { data, fetchNextPage };
};
