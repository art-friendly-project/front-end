import { useAppDispatch } from 'hooks';
import { IoRefreshOutline } from 'react-icons/io5';
import { isModalActions } from 'store/modules/isModal';

const ResetBtn = () => {
  const dispatch = useAppDispatch();

  return (
    <button
      className="absolute flex items-center text-gray-80 right-[5%] top-1 active:bg-gray-00 h-6 pl-1 justify-center rounded-lg"
      onClick={() => {
        dispatch(isModalActions.setIsModal(true));
      }}
    >
      <span className="w-20 text-Body2-M">목록 초기화</span>
      <IoRefreshOutline className="w-5 h-5 rotate-45 -scale-x-100" />
    </button>
  );
};

export default ResetBtn;
