import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from 'api';

export const usePostOrDeleteBookmark = (isBookmark: boolean, id: number) => {
  const queryClient = useQueryClient();

  const postOrDeleteBookmark = async () => {
    if (!isBookmark) {
      await api.post(`/dambyeolags/bookmarks?dambyeolagId=${id}`);
    }

    if (isBookmark) {
      await api.delete(`/dambyeolags/bookmarks?dambyeolagId=${id}`);
    }
  };

  const { mutate } = useMutation({
    mutationFn: postOrDeleteBookmark,
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
