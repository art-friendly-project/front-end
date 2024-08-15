import { useInfiniteQuery } from '@tanstack/react-query';
import api from 'api';
import { useState } from 'react';

export const useGetLikeShows = () => {
  const [totalPages, setTotalPages] = useState(0);

  const getLikeShows = async (page: number) => {
    const res: fetchShow = await api.get(
      `/exhibitions/lists/interest?page=${page}`,
    );
    setTotalPages(res.data.data.totalPages);
    return res.data.data.content;
  };

  const { data, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: ['shows', 'like'],
    queryFn: async ({ pageParam }) => {
      return await getLikeShows(pageParam);
    },
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      const nextPage = lastPageParam + 1;
      if (nextPage < totalPages) {
        return nextPage;
      }
    },
    initialPageParam: 0,
    staleTime: 30 * 1000,
  });

  return { data, isLoading, fetchNextPage };
};
