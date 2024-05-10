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
      className="absolute z-10 top-24 right-8"
    >
      <PiDotsThreeCircleFill className="text-orange-100 w-7 h-7 active:text-orange-dark-100" />
    </button>
  );
};

export default EditOrDeleteBtn;
