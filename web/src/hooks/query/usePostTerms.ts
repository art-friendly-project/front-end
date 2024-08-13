import { useMutation } from '@tanstack/react-query';
import api from 'api';

export const usePostTerms = () => {
  const postTerms = async () => {
    const termIdList = [1, 2];
    await api.post('/terms', { termIdList });
  };

  const { mutate } = useMutation({
    mutationFn: postTerms,
    onError: (err) => {
      console.error(err);
    },
  });

  return mutate;
};
