import { type Dispatch, type SetStateAction } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

interface termsAndPolicyBtn {
  title: string;
  idx: number;
  setIsModal: Dispatch<SetStateAction<boolean[]>>;
}

const TermsAndPolicyBtn = ({ title, idx, setIsModal }: termsAndPolicyBtn) => {
  const termAndPolicyBtnHandler = () => {
    setIsModal((prev) => {
      return prev.map((_, i) => {
        if (i === idx) return true;
        else return false;
      });
    });
  };

  return (
    <button
      className="relative flex items-center w-full h-12 mt-2 active:bg-gray-00 pl-[5%]"
      onClick={termAndPolicyBtnHandler}
    >
      <span className="text-Subhead text-gray-110">{title}</span>
      <IoIosArrowForward className="absolute right-[5%] w-7 h-7 text-gray-70" />
    </button>
  );
};

export default TermsAndPolicyBtn;
