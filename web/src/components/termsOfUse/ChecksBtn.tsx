import { type Dispatch, type SetStateAction } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';

interface checkBtn {
  idx: number;
  text: string;
  isCheck: boolean;
  setIsChecks: Dispatch<SetStateAction<boolean[]>>;
}

const ChecksBtn = ({ idx, text, isCheck, setIsChecks }: checkBtn) => {
  const checkBtnHandler = () => {
    setIsChecks((prev) =>
      prev.map((check, i) => {
        if (i === idx) return !check;
        else return check;
      }),
    );
  };
  return (
    <button className="flex items-center w-full h-16" onClick={checkBtnHandler}>
      <BsCheckCircleFill
        className={`w-6 h-6 ${isCheck ? 'text-orange-100' : 'text-gray-20'}`}
      />
      <span className="ml-2 text-Body3-120 text-gray-110">{text}</span>
      <IoIosArrowForward className="w-5 h-5 ml-auto text-gray-50" />
    </button>
  );
};

export default ChecksBtn;
