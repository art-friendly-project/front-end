import { useQuery } from '@tanstack/react-query';
import api from 'api';

export const useGetEndShows = () => {
  const getEndShows = async () => {
    const res = await api.get('/exhibitions/lists/end');
    return res.data.data;
  };

  const { data, isLoading, error, isError } = useQuery<show[]>({
    queryKey: ['shows', 'end'],
    queryFn: getEndShows,
    staleTime: 5 * 60 * 1000,
  });

  if (isError) {
    console.error(error);
  }

  const endShowData = data;
  const isEndShowLoading = isLoading;

  return { endShowData, isEndShowLoading };
};
