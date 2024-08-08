import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from 'api';

export const usePatchReview = (id: number, title: string, body: string) => {
  const queryClient = useQueryClient();

  const patchReview = async () => {
    const data = {
      title,
      body,
      dambyeolagId: id,
    };
    await api.patch('/dambyeolags', data);
  };

  const { mutate } = useMutation({
    mutationFn: patchReview,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['review'],
      });
    },
    onError: (err) => {
      console.error(err);
    },
  });

  return mutate;
};
