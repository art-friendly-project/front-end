import { useQuery } from '@tanstack/react-query';
import api from 'api';

export const useGetMember: () => member = () => {
  const getMember = async () => {
    const res = await api.get('/members');
    return res.data.data;
  };

  const { data } = useQuery({
    queryKey: ['user', 'member'],
    queryFn: getMember,
    staleTime: 30 * 60 * 1000,
  });

  return data;
};
