import { useAppDispatch } from 'hooks';
import { type Dispatch, type SetStateAction } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { isModalActions } from 'store/modules/isModal';

interface logout {
  setSelectedBtn: Dispatch<SetStateAction<boolean>>;
}

const Logout = ({ setSelectedBtn }: logout) => {
  const dispatch = useAppDispatch();
  const logoutBtnHandler = () => {
    setSelectedBtn(true);
    dispatch(isModalActions.setIsModal(true));
  };

  return (
    <button
      className="relative flex items-center w-full mt-4 h-12 pl-[5%] active:bg-gray-00"
      onClick={logoutBtnHandler}
    >
      <span className="text-Subhead text-gray-110">로그아웃</span>
      <IoIosArrowForward className="absolute right-[5%] w-7 h-7 text-gray-70" />
    </button>
  );
};

export default Logout;
