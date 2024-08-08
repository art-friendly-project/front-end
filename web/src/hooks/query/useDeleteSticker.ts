import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from 'api';

export const useDeleteSticker = (selectStickerId: number) => {
  const queryClient = useQueryClient();

  const deleteSticker = async () => {
    await api.delete(`/stickers?stickerId=${selectStickerId}`);
  };

  const { mutate } = useMutation({
    mutationFn: deleteSticker,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['review'] });
    },
    onError: (err) => {
      console.error(err);
    },
  });

  return mutate;
};
