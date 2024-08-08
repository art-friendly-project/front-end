import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from 'api';

export const usePostOrPatchRank = (
  id: number,
  idx: number,
  checkTemperature: null | string,
) => {
  const queryClient = useQueryClient();

  const postOrPatchRank = async () => {
    if (checkTemperature === null) {
      return await api.post(
        `/exhibitions/hopes?exhibitionId=${id}&hopeIndex=${idx + 1}`,
      );
    } else {
      return await api.patch(
        `/exhibitions/hopes?exhibitionId=${id}&hopeIndex=${idx + 1}`,
      );
    }
  };

  const { mutate } = useMutation({
    mutationFn: postOrPatchRank,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['show', 'detail'] });
    },
    onError: (err) => {
      console.error(err);
    },
  });

  return mutate;
};
