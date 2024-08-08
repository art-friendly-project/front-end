import { useQuery } from '@tanstack/react-query';
import api from 'api';

export const useGetLogin = (code: string | null) => {
  const getLogin = async (code: string | null) => {
    if (code !== null) {
      const res = await api.get(`/oauth/token?code=${code}`);
      return res.data.data;
    }
  };

  const { data, error, isError } = useQuery<auth>({
    queryKey: ['login', code],
    queryFn: async () => await getLogin(code),
  });

  if (isError) {
    console.error(error);
  }

  return data;
};
