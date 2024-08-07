import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from 'api';
import BasicBtn from 'components/common/BasicBtn';
import WithdrawalConfirmCheckbox from 'components/withdrawalConfirm/WithdrawalConfirmCheckbox';
import WithdrawalConfirmContentList from 'components/withdrawalConfirm/WithdrawalConfirmContentList';
import WithdrawalConfirmTitle from 'components/withdrawalConfirm/WithdrawalConfirmTitle';
import { useAppSelector } from 'hooks';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { selectWithdrawalReason } from 'store/modules/withdrawalReason';

const WithdrawalConfirm = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [confirm, setConfirm] = useState(false);
  const withdrawalReason = useAppSelector(selectWithdrawalReason);

  const postWithdrawalReason = async () => {
    await api.post(`/members/withdrawal?reasonId=${withdrawalReason}`);
  };

  const deleteMember = async () => {
    await api.delete('/members');
  };

  const postWithdrawalReasonMutaion = useMutation({
    mutationFn: postWithdrawalReason,
  });

  const postWithdrawalReasonMutate = postWithdrawalReasonMutaion.mutate;

  const deleteMemberMutation = useMutation({
    mutationFn: deleteMember,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });

  const deleteMemberMutate = deleteMemberMutation.mutate;

  const btnHandler = () => {
    postWithdrawalReasonMutate();
    deleteMemberMutate();
    localStorage.clear();
    navigate('/kakao-login');
  };

  return (
    <div className="flex flex-col items-center w-full h-full">
      <WithdrawalConfirmTitle />
      <WithdrawalConfirmContentList />
      <WithdrawalConfirmCheckbox confirm={confirm} setConfirm={setConfirm} />
      <BasicBtn
        name="탈퇴하기"
        fn={btnHandler}
        disable={!confirm}
        style="mt-auto pb-[5%]"
      />
    </div>
  );
};

export default WithdrawalConfirm;
