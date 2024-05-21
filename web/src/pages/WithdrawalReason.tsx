import BtnBasic from 'components/common/BtnBasic';
import WithdrawalReasonCheckboxList from 'components/withdrawalReason/WithdrawalReasonCheckboxList';
import WithdrawalReasonTitle from 'components/withdrawalReason/WithdrawalReasonTitle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WithdrawalReason = () => {
  const navigate = useNavigate();
  const [checkedReasons, setCheckedReasons] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);
  const btnHandler = () => {
    navigate('/withdrawal/confirm');
  };

  return (
    <div className="flex flex-col items-center w-full h-full">
      <WithdrawalReasonTitle />
      <WithdrawalReasonCheckboxList
        checkedReasons={checkedReasons}
        setCheckedReasons={setCheckedReasons}
      />
      <BtnBasic
        name="다음"
        fn={btnHandler}
        disable={!checkedReasons.includes(true)}
        style="mt-auto pb-[5%]"
      />
    </div>
  );
};

export default WithdrawalReason;
