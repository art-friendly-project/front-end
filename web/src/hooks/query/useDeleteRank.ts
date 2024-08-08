import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from 'api';

export const useDeleteRank = (id: number) => {
  const queryClient = useQueryClient();

  const deleteRank = async () => {
    await api.delete(`/exhibitions/hopes?exhibitionId=${id}`);
  };

  const { mutate } = useMutation({
    mutationFn: deleteRank,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['show', 'detail'] });
    },
    onError: (err) => {
      console.error(err);
    },
  });

  return mutate;
};
