import { type Dispatch, type SetStateAction } from 'react';
import { IoIosClose } from 'react-icons/io';

interface closeBtn {
  setIsModal: Dispatch<SetStateAction<boolean>>;
}

const CloseBtn = ({ setIsModal }: closeBtn) => {
  const closeBtnHandler = () => {
    setIsModal(false);
  };
  return (
    <button
      className="absolute rounded-lg top-4 right-3 active:bg-gray-00"
      onClick={closeBtnHandler}
    >
      <IoIosClose className="w-12 h-12" />
    </button>
  );
};

export default CloseBtn;
