import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import BasicBtn from 'components/common/BasicBtn';
import WithdrawalConfirmCheckbox from 'components/withdrawalConfirm/WithdrawalConfirmCheckbox';
import WithdrawalConfirmContentList from 'components/withdrawalConfirm/WithdrawalConfirmContentList';
import WithdrawalConfirmTitle from 'components/withdrawalConfirm/WithdrawalConfirmTitle';
import { selectWithdrawalReason } from 'store/modules/withdrawalReason';
import { usePostWithdrawalReason } from 'hooks/query/usePostWithdrawalReason';
import { useDeleteMember } from 'hooks/query/useDeleteMember';

const WithdrawalConfirm = () => {
  const navigate = useNavigate();

  const [confirm, setConfirm] = useState(false);
  const withdrawalReason = useAppSelector(selectWithdrawalReason);

  const postWithdrawalReasonMutate = usePostWithdrawalReason(withdrawalReason);

  const deleteMemberMutate = useDeleteMember();

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
