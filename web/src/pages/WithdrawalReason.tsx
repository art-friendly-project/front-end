import BtnBasic from 'components/common/BtnBasic';
import WithdrawalReasonCheckboxList from 'components/withdrawalReason/WithdrawalReasonCheckboxList';
import WithdrawalReasonTitle from 'components/withdrawalReason/WithdrawalReasonTitle';
import { useAppDispatch } from 'hooks';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { withdrawalReasonActions } from 'store/modules/withdrawalReason';

const WithdrawalReason = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [checkedReasons, setCheckedReasons] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  const btnHandler = () => {
    dispatch(withdrawalReasonActions.current(checkedReasons.indexOf(true) + 1));
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
