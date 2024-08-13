import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from 'api';

export const useDeleteMember = () => {
  const queryClient = useQueryClient();

  const deleteMember = async () => {
    await api.delete('/members');
  };

  const deleteMemberMutation = useMutation({
    mutationFn: deleteMember,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['user'] });
      localStorage.clear();
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const deleteMemberMutate = deleteMemberMutation.mutate;

  return deleteMemberMutate;
};
