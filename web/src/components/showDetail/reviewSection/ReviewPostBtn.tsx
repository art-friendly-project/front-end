import { useAppDispatch } from 'hooks';
import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';
import { endpointActions } from 'store/modules/endpoint';
import ReviewWrittenConfirmModal from './ReviewWrittenConfirmModal';

interface reviewPostBtn {
  id: number;
  hasDambyeolagWritten: boolean;
}

const ReviewPostBtn = ({ id, hasDambyeolagWritten }: reviewPostBtn) => {
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const dispatch = useAppDispatch();

  const postBtnHandler = () => {
    if (!hasDambyeolagWritten) {
      dispatch(endpointActions.current(pathname));
      navigate(`/review-post/${id}`);
    }

    if (hasDambyeolagWritten) {
      setIsModal(true);
    }
  };

  return (
    <>
      {isModal ? <ReviewWrittenConfirmModal setIsModal={setIsModal} /> : null}
      <button
        className={`absolute right-0 flex items-center justify-center w-32 h-8 pl-1 rounded-lg top-6 active:bg-gray-00 ${hasDambyeolagWritten ? 'text-gray-30' : 'text-gray-80'}`}
        onClick={postBtnHandler}
      >
        <span className="text-Body2-M">담벼락 남기기</span>
        <IoIosArrowForward />
      </button>
    </>
  );
};

export default ReviewPostBtn;
