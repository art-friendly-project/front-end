import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

interface checksAllBtn {
  isChecks: boolean[];
  setIsChecks: Dispatch<SetStateAction<boolean[]>>;
}

const ChecksAllBtn = ({ isChecks, setIsChecks }: checksAllBtn) => {
  const [isAllCheck, setIsAllCheck] = useState(false);
  const checkAllBtnHandler = () => {
    setIsAllCheck((prev) => !prev);
    setIsChecks((prev) => prev.map((_) => !isAllCheck));
  };

  useEffect(() => {
    if (!isChecks.includes(false)) setIsAllCheck(true);
    if (isChecks.includes(false)) setIsAllCheck(false);
  }, [isChecks]);

  return (
    <button
      className="flex items-center w-full h-24 mb-6 border-b rounded-t-lg border-b-gray-20 active:bg-gray-00"
      onClick={checkAllBtnHandler}
    >
      <span className="ml-2 text-Subhead-M">모두 동의할게요.</span>
      <BsCheckCircleFill
        className={`w-6 h-6 ml-auto ${isAllCheck ? 'text-orange-100' : 'text-gray-20'}`}
      />
    </button>
  );
};

export default ChecksAllBtn;
