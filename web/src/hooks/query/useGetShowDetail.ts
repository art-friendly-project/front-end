import { useQuery } from '@tanstack/react-query';
import api from 'api';

export const useGetShowDetail = (id: number): showDetail => {
  const getShowDetail = async (id: number) => {
    const res = await api.get(`/exhibitions?exhibitionId=${id}`);
    return res.data.data;
  };

  const { data, error, isError } = useQuery({
    queryKey: ['show', 'detail', id],
    queryFn: async () => await getShowDetail(id),
    staleTime: 5 * 60 * 1000,
  });

  if (isError) {
    console.error(error);
  }

  return data;
};
