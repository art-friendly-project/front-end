import { useQuery } from '@tanstack/react-query';
import api from 'api';
import { useGetMember } from './useGetMember';

export const useGetProfile = (userId: number): user => {
  const myId = useGetMember().id;

  const getProfile = async (id: number) => {
    const res: fetchProfile = await api.get(
      `/members/profiles?searchMemberId=${id}`,
    );

    return res.data.data;
  };

  const { data, error, isError } = useQuery({
    queryKey: ['user', 'profile', userId === 0 ? myId : userId],
    queryFn: async () => await getProfile(userId === 0 ? myId : userId),
  });

  const user = data;

  if (isError) {
    console.error(error);
  }

  if (user === undefined) {
    throw new Error('User profile not found');
  }

  return user;
};
