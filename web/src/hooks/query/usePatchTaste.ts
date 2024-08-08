import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from 'api';

export const usePatchTaste = (selectedList: string[]) => {
  const queryClient = useQueryClient();

  const patchMember = async () => {
    await api.patch('/members', {
      artPreferenceTypeList: selectedList,
    });
  };

  const { mutate } = useMutation({
    mutationFn: patchMember,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['user', 'profile'] });
    },
    onError: (err) => {
      console.error(err);
    },
  });

  return mutate;
};
