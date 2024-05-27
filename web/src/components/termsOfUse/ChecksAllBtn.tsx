import { useState, type Dispatch, type SetStateAction } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

interface checksAllBtn {
  setIsChecks: Dispatch<SetStateAction<boolean[]>>;
}

const ChecksAllBtn = ({ setIsChecks }: checksAllBtn) => {
  const [isCheck, setIsCheck] = useState(false);
  const checkAllBtnHandler = () => {
    setIsCheck((prev) => !prev);
    setIsChecks((prev) => prev.map((_) => !isCheck));
  };
  return (
    <button
      className="flex items-center w-full h-24 mb-6 border-b rounded-lg border-b-gray-20 active:bg-gray-00"
      onClick={checkAllBtnHandler}
    >
      <span className="ml-2 text-Subhead-M">모두 동의할게요.</span>
      <BsCheckCircleFill
        className={`w-6 h-6 ml-auto ${isCheck ? 'text-orange-100' : 'text-gray-20'}`}
      />
    </button>
  );
};

export default ChecksAllBtn;
