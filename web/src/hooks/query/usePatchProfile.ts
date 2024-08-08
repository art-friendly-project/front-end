import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from 'api';

export const usePatchProfile = (
  file: File | undefined,
  nickName: string,
  selfIntro: string,
) => {
  const queryClient = useQueryClient();

  const patchProfile = async () => {
    if (file !== undefined) {
      const formData = new FormData();
      formData.append('profileImage', file);
      await api.patch('/members/images', formData);
    }

    await api.patch('/members', {
      nickName,
      selfIntro,
    });
  };

  const { mutate } = useMutation({
    mutationFn: patchProfile,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: (err) => {
      console.error(err);
    },
  });

  return mutate;
};
