import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from 'api';

export const usePostReview = (
  exhibitionId: number,
  title: string,
  body: string,
) => {
  const queryClient = useQueryClient();

  const postReview = async () => {
    const data = {
      title,
      body,
      exhibitionId,
    };

    await api.post('/dambyeolags', data);
  };

  const { mutate } = useMutation({
    mutationFn: postReview,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['show'],
      });
    },
    onError: (err) => {
      console.error(err);
    },
  });

  return mutate;
};
