import { useInfiniteQuery } from '@tanstack/react-query';
import api from 'api';
import { useState } from 'react';

export const useGetSavedReviews = () => {
  const [totalPages, setTotalPages] = useState(0);

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

  return { data, isLoading, fetchNextPage };
};
