import { type Dispatch, type SetStateAction } from 'react';
import { IoCheckmarkCircle } from 'react-icons/io5';

interface withdrawalConfirmCheckbox {
  confirm: boolean;
  setConfirm: Dispatch<SetStateAction<boolean>>;
}

const WithdrawalConfirmCheckbox = ({
  confirm,
  setConfirm,
}: withdrawalConfirmCheckbox) => {
  const btnHandler = () => {
    setConfirm((prev) => !prev);
  };

  return (
    <button
      className={`flex items-center mt-2 w-9/10 mb-10 ${confirm ? 'text-orange-100' : 'text-gray-30'}`}
      onClick={btnHandler}
    >
      <span className="text-Body3-120 text-gray-110">
        모두 확인하였으며, 회원 탈퇴에 동의합니다.
      </span>
      <IoCheckmarkCircle className="w-8 h-8 ml-auto" />
    </button>
  );
};

export default WithdrawalConfirmCheckbox;
