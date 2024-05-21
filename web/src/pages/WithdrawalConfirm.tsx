import BtnBasic from 'components/common/BtnBasic';
import WithdrawalConfirmCheckbox from 'components/withdrawalConfirm/WithdrawalConfirmCheckbox';
import WithdrawalConfirmContentList from 'components/withdrawalConfirm/WithdrawalConfirmContentList';
import WithdrawalConfirmTitle from 'components/withdrawalConfirm/WithdrawalConfirmTitle';
import { useState } from 'react';

const WithdrawalConfirm = () => {
  const [confirm, setConfirm] = useState(false);
  const btnHandler = () => {};

  return (
    <div className="flex flex-col items-center w-full h-full">
      <WithdrawalConfirmTitle />
      <WithdrawalConfirmContentList />
      <WithdrawalConfirmCheckbox confirm={confirm} setConfirm={setConfirm} />
      <BtnBasic
        name="탈퇴하기"
        fn={btnHandler}
        disable={!confirm}
        style="mt-auto pb-[5%]"
      />
    </div>
  );
};

export default WithdrawalConfirm;
