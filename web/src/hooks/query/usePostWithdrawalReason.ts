import { useMutation } from '@tanstack/react-query';
import api from 'api';

export const usePostWithdrawalReason = (withdrawalReason: number) => {
  const postWithdrawalReason = async () => {
    await api.post(`/members/withdrawal?reasonId=${withdrawalReason}`);
  };

  const postWithdrawalReasonMutaion = useMutation({
    mutationFn: postWithdrawalReason,
    onError: (err) => {
      console.error(err);
    },
  });

  const postWithdrawalReasonMutate = postWithdrawalReasonMutaion.mutate;

  return postWithdrawalReasonMutate;
};
