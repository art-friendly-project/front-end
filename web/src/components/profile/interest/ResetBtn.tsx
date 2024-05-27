import { useAppDispatch } from 'hooks';
import { IoIosArrowForward } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';
import { endpointActions } from 'store/modules/endpoint';

const ResetBtn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const pathname = location.pathname;

  return (
    <button
      className="flex items-center absolute right-[5%] top-1 w-20 h-6 pl-1 active:bg-gray-00 justify-center rounded-lg"
      onClick={() => {
        dispatch(endpointActions.current(pathname));
        navigate('/taste-select');
      }}
    >
      <span className="text-Body2-M text-gray-80">다시 설정</span>
      <IoIosArrowForward className="text-gray-80" />
    </button>
  );
};

export default ResetBtn;
