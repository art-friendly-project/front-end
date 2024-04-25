import { type Dispatch, type SetStateAction } from 'react';
import { PiTrashSimple } from 'react-icons/pi';

interface deleteBtn {
  setIsReviewDeleteModal: Dispatch<SetStateAction<boolean>>;
}

const DeleteBtn = ({ setIsReviewDeleteModal }: deleteBtn) => {
  return (
    <button
      onClick={() => {
        setIsReviewDeleteModal(true);
      }}
      className="absolute z-10 top-24 right-10"
    >
      <PiTrashSimple className="w-6 h-6" />
    </button>
  );
};

export default DeleteBtn;
