import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from 'api';

export const usePostSticker = (
  id: number,
  stickerType: string,
  text: string,
) => {
  const queryClient = useQueryClient();

  const postSticker = async () => {
    const data = {
      dambyeolagId: id,
      stickerType,
      body: text,
    };

    await api.post('/stickers', data);
  };

  const { mutate } = useMutation({
    mutationFn: postSticker,
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
