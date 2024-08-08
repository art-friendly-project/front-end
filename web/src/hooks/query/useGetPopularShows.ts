import { useQuery } from '@tanstack/react-query';
import api from 'api';

export const useGetPopularShows = () => {
  const getPopularShows = async () => {
    const res = await api.get('/exhibitions/lists/popular');
    return res.data.data;
  };

  const { data, isLoading, error, isError } = useQuery<popularShow[]>({
    queryKey: ['shows', 'popular'],
    queryFn: getPopularShows,
    staleTime: 5 * 60 * 1000,
  });

  if (isError) {
    console.error(error);
  }

  return { data, isLoading };
};
