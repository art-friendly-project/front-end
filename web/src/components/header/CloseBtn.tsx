import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import CloseConfirmModal from './CloseConfirmModal';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import { selectIsPostEmpty } from 'store/modules/isPostEmpty';

const CloseBtn = () => {
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const isPostEmpty = useAppSelector(selectIsPostEmpty);

  const btnHandler = () => {
    if (pathname.includes('review-post')) {
      if (isPostEmpty) {
        navigate(-1);
      } else {
        setIsModal(true);
      }

      return;
    }

    setIsModal(true);
  };

  return (
    <>
      <button className="absolute top-2 right-3" onClick={btnHandler}>
        <IoIosClose className="w-12 h-12" />
      </button>
      {isModal ? <CloseConfirmModal setIsModal={setIsModal} /> : null}
    </>
  );
};

export default CloseBtn;
