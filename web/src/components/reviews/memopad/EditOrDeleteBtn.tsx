import { type Dispatch, type SetStateAction } from 'react';
import { PiDotsThreeCircleFill } from 'react-icons/pi';

interface editOrDeleteBtn {
  setIsEditorDeleteModal: Dispatch<SetStateAction<boolean>>;
}

const EditOrDeleteBtn = ({ setIsEditorDeleteModal }: editOrDeleteBtn) => {
  return (
    <button
      onClick={() => {
        setIsEditorDeleteModal(true);
      }}
      className="absolute top-[15%] right-[5%] z-10"
    >
      <PiDotsThreeCircleFill className="text-orange-100 w-7 h-7 active:text-orange-dark-100" />
    </button>
  );
};

export default EditOrDeleteBtn;
