import { useAppDispatch } from 'hooks';
import { IoRefreshOutline } from 'react-icons/io5';
import { isModalActions } from 'store/modules/isModal';

const ResetBtn = () => {
  const dispatch = useAppDispatch();

  return (
    <button
      className="absolute flex items-center text-gray-80 right-[5%] top-2 active:bg-gray-00"
      onClick={() => {
        dispatch(isModalActions.setIsModal(true));
      }}
    >
      <span className="text-Body2-M rotate">목록 초기화</span>
      <IoRefreshOutline className="w-5 h-5 ml-1 rotate-45 -scale-x-100" />
    </button>
  );
};

export default ResetBtn;
