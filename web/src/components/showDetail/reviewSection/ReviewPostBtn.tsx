import { useAppDispatch } from 'hooks';
import { IoIosArrowForward } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';
import { endpointActions } from 'store/modules/endpoint';
import { showIdActions } from 'store/modules/showId';

interface reviewPostBtn {
  id: number;
  hasDambyeolagWritten: boolean;
}

const ReviewPostBtn = ({ id, hasDambyeolagWritten }: reviewPostBtn) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const dispatch = useAppDispatch();

  return (
    <>
      {hasDambyeolagWritten ? null : (
        <button
          className="absolute flex items-center top-10 text-gray-80 right-[3%] rounded-lg  w-32 h-8 justify-center pl-1 active:bg-gray-00"
          onClick={() => {
            dispatch(endpointActions.current(pathname));
            dispatch(showIdActions.current(id));
            navigate('/review-post');
          }}
        >
          <span>담벼락 남기기</span>
          <IoIosArrowForward />
        </button>
      )}
    </>
  );
};

export default ReviewPostBtn;
