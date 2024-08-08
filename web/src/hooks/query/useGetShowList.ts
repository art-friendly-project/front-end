import { useInfiniteQuery } from '@tanstack/react-query';
import api from 'api';
import { useState } from 'react';

export const useGetShowList = (
  location: string,
  duration: string,
  priority: string,
) => {
  const [totalPages, setTotalPages] = useState(0);

  const getShowList = async (
    page: number,
    location: string,
    duration: string,
    priority: string,
  ) => {
    const res: fetchShow = await api.get(
      `/exhibitions/lists?area=${location}&progressStatus=${duration}&sortType=${priority}&page=${page}`,
    );
    setTotalPages(res.data.data.totalPages);
    return res.data.data.content;
  };

  const { data, isLoading, isFetchingNextPage, fetchNextPage, error, isError } =
    useInfiniteQuery({
      queryKey: ['shows', 'list', location, duration, priority],
      queryFn: async ({ pageParam }) => {
        return await getShowList(pageParam, location, duration, priority);
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

  if (isError) {
    console.error(error);
  }

  return { data, isLoading, isFetchingNextPage, fetchNextPage };
};
