import { useAppDispatch } from 'hooks';
import { type Dispatch, type SetStateAction } from 'react';
import { showsLocationActions } from 'store/modules/showsLocation';

interface selectBtn {
  type: string;
  select: string[];
  setIsModalOpen: Dispatch<SetStateAction<boolean[]>>;
  setPriority: Dispatch<SetStateAction<string>>;
}

const SelectBtn = ({
  type,
  select,
  setIsModalOpen,
  setPriority,
}: selectBtn) => {
  const dispatch = useAppDispatch();

  const btnHandler = () => {
    if (type === 'location') {
      dispatch(showsLocationActions.current(select[0]));
    }

    if (type === 'priority') {
      setPriority(select[0]);
    }

    setIsModalOpen([false, false, false]);
  };

  return (
    <button
      className="h-12 mb-3 mr-2 w-23/50 rounded-xl bg-gray-00 text-Body3-M active:bg-gray-10"
      onClick={btnHandler}
    >
      {select[1]}
    </button>
  );
};

export default SelectBtn;
