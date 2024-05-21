import { type Dispatch, type SetStateAction } from 'react';
import { IoCheckmarkCircle } from 'react-icons/io5';

interface withdrawalReasonCheckbox {
  reason: string;
  idx: number;
  checkedReason: boolean;
  setCheckedReasons: Dispatch<SetStateAction<boolean[]>>;
}

const WithdrawalReasonCheckbox = ({
  reason,
  idx,
  checkedReason,
  setCheckedReasons,
}: withdrawalReasonCheckbox) => {
  const btnHandler = () => {
    setCheckedReasons((prev) =>
      prev.map((p, i) => {
        return i === idx ? !p : p;
      }),
    );
  };

  return (
    <button className="flex items-center mb-4" onClick={btnHandler}>
      <span className="text-Body3-120 text-gray-110">{reason}</span>
      <IoCheckmarkCircle
        className={`w-8 h-8 ml-auto ${checkedReason ? 'text-orange-100' : 'text-gray-20'}`}
      />
    </button>
  );
};

export default WithdrawalReasonCheckbox;
