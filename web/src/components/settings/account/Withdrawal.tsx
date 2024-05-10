import { useAppDispatch } from 'hooks';
import { type Dispatch, type SetStateAction } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { isModalActions } from 'store/modules/isModal';

interface withdrawal {
  setSelectedBtn: Dispatch<SetStateAction<boolean>>;
}

const Withdrawal = ({ setSelectedBtn }: withdrawal) => {
  const dispatch = useAppDispatch();
  const withdrawalHandler = () => {
    setSelectedBtn(false);
    dispatch(isModalActions.setIsModal(true));
  };

  return (
    <button
      className="relative flex items-center w-full h-12 pl-[5%] active:bg-gray-00"
      onClick={withdrawalHandler}
    >
      <span className="text-Subhead text-gray-110">회원탈퇴</span>
      <IoIosArrowForward className="absolute right-[5%] w-7 h-7 text-gray-70" />
    </button>
  );
};

export default Withdrawal;
