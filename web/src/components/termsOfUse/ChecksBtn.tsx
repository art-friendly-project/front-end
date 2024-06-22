import { type Dispatch, type SetStateAction } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';

interface checkBtn {
  idx: number;
  text: string[];
  isCheck: boolean;
  setIsChecks: Dispatch<SetStateAction<boolean[]>>;
  setIsModal: Dispatch<SetStateAction<boolean[]>>;
}

const ChecksBtn = ({
  idx,
  text,
  isCheck,
  setIsChecks,
  setIsModal,
}: checkBtn) => {
  const checkBtnHandler = () => {
    setIsChecks((prev) =>
      prev.map((check, i) => {
        if (i === idx) return !check;
        else return check;
      }),
    );
  };

  const detailModalOpnBtnHandler = () => {
    setIsModal((prev) =>
      prev.map((_, i) => {
        if (i === idx) return true;
        else return false;
      }),
    );
  };
  return (
    <div className="flex w-full h-14">
      <button
        className="flex items-center rounded-lg active:bg-gray-00"
        onClick={detailModalOpnBtnHandler}
      >
        <span
          className={`ml-2 text-Body3-120 ${text[0] === '필수' ? 'text-purple-90' : 'text-gray-80'}`}
        >
          {text[0]}
        </span>
        <span className="ml-2 text-Body3-120 text-gray-110">{text[1]}</span>
        <IoIosArrowForward className="w-5 h-5 ml-2 text-gray-50" />
      </button>
      <button className="ml-auto" onClick={checkBtnHandler}>
        <BsCheckCircleFill
          className={`w-6 h-6 ${isCheck ? 'text-orange-100' : 'text-gray-20'}`}
        />
      </button>
    </div>
  );
};

export default ChecksBtn;
