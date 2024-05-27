import { type Dispatch, type SetStateAction } from 'react';
import { IoIosClose } from 'react-icons/io';

interface closeBtn {
  setIsEditorDeleteModal: Dispatch<SetStateAction<boolean>>;
}

const CloseBtn = ({ setIsEditorDeleteModal }: closeBtn) => {
  const closeBtnHandler = () => {
    setIsEditorDeleteModal(false);
  };

  return (
    <button className="absolute right-[5%] top-6" onClick={closeBtnHandler}>
      <IoIosClose className="w-12 h-12" />
    </button>
  );
};

export default CloseBtn;
