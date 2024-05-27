import api from 'api';
import BtnBasic from 'components/common/BtnBasic';
import WithdrawalConfirmCheckbox from 'components/withdrawalConfirm/WithdrawalConfirmCheckbox';
import WithdrawalConfirmContentList from 'components/withdrawalConfirm/WithdrawalConfirmContentList';
import WithdrawalConfirmTitle from 'components/withdrawalConfirm/WithdrawalConfirmTitle';
import { useAppSelector } from 'hooks';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { selectWithdrawalReason } from 'store/modules/withdrawalReason';

const WithdrawalConfirm = () => {
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(false);
  const withdrawalReason = useAppSelector(selectWithdrawalReason);

  const btnHandler = async () => {
    try {
      await api.post(`/members/withdrawal?reasonId=${withdrawalReason}`);
      await api.delete('/members');
      localStorage.clear();
      navigate('/kakao-login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-full">
      <WithdrawalConfirmTitle />
      <WithdrawalConfirmContentList />
      <WithdrawalConfirmCheckbox confirm={confirm} setConfirm={setConfirm} />
      <BtnBasic
        name="탈퇴하기"
        fn={() => {
          void btnHandler();
        }}
        disable={!confirm}
        style="mt-auto pb-[5%]"
      />
    </div>
  );
};

export default WithdrawalConfirm;
