import { useQuery } from '@tanstack/react-query';
import api from 'api';

export const useGetReview = (id: number): reviewDetail => {
  const getReview = async (id: number) => {
    const res = await api.get(`/dambyeolags?dambyeolagId=${id}`);
    return res.data.data;
  };

  const { data, error, isError } = useQuery({
    queryKey: ['review', id],
    queryFn: async () => await getReview(id),
    staleTime: 30 * 1000,
  });

  if (isError) {
    console.error(error);
  }

  return data;
};
