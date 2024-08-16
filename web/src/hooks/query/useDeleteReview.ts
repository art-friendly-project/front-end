import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from 'api';

export const useDeleteReview = (id: number) => {
  const queryClient = useQueryClient();

  const deleteReview = async () => {
    await api.delete(`/dambyeolags?dambyeolagId=${id}`);
  };

  const { mutate } = useMutation({
    mutationFn: deleteReview,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['show', 'reviews'] });
    },
    onError: (err) => {
      console.error(err);
    },
  });

  return mutate;
};
