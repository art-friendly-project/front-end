import { useQuery } from '@tanstack/react-query';
import api from 'api';

export const useGetEndShows: () => {
  data: show[];
  isLoading: boolean;
} = () => {
  const getEndShows = async () => {
    const res = await api.get('/exhibitions/lists/end');
    return res.data.data;
  };

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['shows', 'end'],
    queryFn: getEndShows,
    staleTime: 30 * 1000,
  });

  if (isError) {
    console.error(error);
  }

  return { data, isLoading };
};
