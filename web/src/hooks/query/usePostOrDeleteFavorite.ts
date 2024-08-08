import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from 'api';

export const usePostOrDeleteFavorite = (isLike: boolean, id: number) => {
  const queryClient = useQueryClient();

  const postOrDeleteFavorite = async () => {
    if (!isLike) {
      await api.post(`/exhibitions/likes?exhibitionId=${id}`);
    }

    if (isLike) {
      await api.delete(`/exhibitions/likes?exhibitionId=${id}`);
    }
  };

  const { mutate } = useMutation({
    mutationFn: postOrDeleteFavorite,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['shows'] });
      await queryClient.invalidateQueries({ queryKey: ['show', 'detail'] });
    },
    onError: (err) => {
      console.error(err);
    },
  });

  return mutate;
};
