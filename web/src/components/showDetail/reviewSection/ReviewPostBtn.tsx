import { useAppDispatch } from 'hooks';
import { IoIosArrowForward } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';
import { endpointActions } from 'store/modules/endpoint';

const ReviewPostBtn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const dispatch = useAppDispatch();

  return (
    <button
      className="absolute flex items-center top-10 text-gray-80 right-[4%] active:bg-gray-00"
      onClick={() => {
        dispatch(endpointActions.current(pathname));
        navigate('review-post');
      }}
    >
      <span>담벼락 남기기</span>
      <IoIosArrowForward />
    </button>
  );
};

export default ReviewPostBtn;
