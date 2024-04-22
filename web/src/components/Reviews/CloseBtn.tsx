import { type Dispatch, type SetStateAction } from 'react';
import { IoIosClose } from 'react-icons/io';

interface closeBtn {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  setCurrent: Dispatch<SetStateAction<boolean>>;
}

const CloseBtn = ({ setIsModal, setCurrent }: closeBtn) => {
  return (
    <button
      className="absolute right-2 top-2"
      onClick={() => {
        setIsModal(false);
        setCurrent(false);
      }}
    >
      <IoIosClose className="w-12 h-12" />
    </button>
  );
};

export default CloseBtn;
