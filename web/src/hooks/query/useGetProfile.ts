import { useQuery } from '@tanstack/react-query';
import api from 'api';

export const useGetProfile = (
  userId: number,
  myId: number,
): user | undefined => {
  let currentId: number = userId;
  if (userId === 0) currentId = myId;

  const getProfile = async (id: number) => {
    const res: fetchProfile = await api.get(
      `/members/profiles?searchMemberId=${id}`,
    );

    return res.data.data;
  };

  const { data, error, isError } = useQuery({
    queryKey: ['user', 'profile', currentId],
    queryFn: async () => await getProfile(currentId),
    staleTime: 30 * 1000,
    enabled: !!currentId,
  });

  const user = data;

  if (isError) {
    console.error(error);
  }

  return user;
};
