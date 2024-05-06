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
      className="flex items-center w-full h-16 pb-8 mb-6 border-b border-b-gray-20"
      onClick={checkAllBtnHandler}
    >
      <BsCheckCircleFill
        className={`w-6 h-6 ${isCheck ? 'text-orange-100' : 'text-gray-20'}`}
      />
      <span className="ml-2 text-Subhead-M">모두 동의할게요.</span>
    </button>
  );
};

export default ChecksAllBtn;
