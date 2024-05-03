import { IoIosClose } from 'react-icons/io';
import { useAppDispatch, useAppSelector } from 'hooks';
import { isModalActions } from 'store/modules/isModal';
import { selectIsReviewText } from 'store/modules/isReviewText';
import { useNavigate } from 'react-router-dom';

const CloseBtn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isReviewText = useAppSelector(selectIsReviewText);

  const btnHandler = () => {
    if (isReviewText) {
      navigate(-1);
      return;
    }

    dispatch(isModalActions.setIsModal(true));
  };

  return (
    <>
      <button
        className="absolute top-2 right-3 active:bg-gray-00"
        onClick={btnHandler}
      >
        <IoIosClose className="w-12 h-12" />
      </button>
    </>
  );
};

export default CloseBtn;
