import { type Dispatch, type SetStateAction } from 'react';
import { IoIosClose } from 'react-icons/io';

interface memoPadCloseBtn {
  setIsCommentModal: Dispatch<SetStateAction<boolean>>;
}

const MemoPadCloseBtn = ({ setIsCommentModal }: memoPadCloseBtn) => {
  return (
    <button>
      <IoIosClose
        className="w-8 h-8 mr-1"
        onClick={() => {
          setIsCommentModal(false);
        }}
      />
    </button>
  );
};

export default MemoPadCloseBtn;
