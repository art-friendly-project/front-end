import { useAppDispatch } from 'hooks';
import { PiTrashSimple } from 'react-icons/pi';
import { isModalActions } from 'store/modules/isModal';

const DeleteBtn = () => {
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => {
        dispatch(isModalActions.setIsModal(true));
      }}
      className="absolute z-10 top-24 right-10"
    >
      <PiTrashSimple className="w-6 h-6" />
    </button>
  );
};

export default DeleteBtn;
