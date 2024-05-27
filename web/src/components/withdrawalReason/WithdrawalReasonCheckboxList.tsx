import reasons from 'assets/data/withdrawalResons';
import { type Dispatch, type SetStateAction } from 'react';
import WithdrawalReasonCheckbox from './WithdrawalReasonCheckbox';

interface withdrawalReasonCheckboxList {
  checkedReasons: boolean[];
  setCheckedReasons: Dispatch<SetStateAction<boolean[]>>;
}

const WithdrawalReasonCheckboxList = ({
  checkedReasons,
  setCheckedReasons,
}: withdrawalReasonCheckboxList) => {
  return (
    <div className="flex flex-col w-full px-[5%] mt-auto mb-10">
      {reasons.map((reason, idx) => (
        <WithdrawalReasonCheckbox
          key={reason}
          idx={idx}
          reason={reason}
          checkedReason={checkedReasons[idx]}
          setCheckedReasons={setCheckedReasons}
        />
      ))}
    </div>
  );
};

export default WithdrawalReasonCheckboxList;
