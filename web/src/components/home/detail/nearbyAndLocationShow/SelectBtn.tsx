import { useAppDispatch } from 'hooks';
import { type Dispatch, type SetStateAction } from 'react';
import { locationActions } from 'store/modules/location';

interface selectBtn {
  select: string[] | string;
  setIsModalOpen: Dispatch<SetStateAction<boolean[]>>;
  setState: Dispatch<SetStateAction<string>> | null;
}

const SelectBtn = ({ select, setIsModalOpen, setState }: selectBtn) => {
  const dispatch = useAppDispatch();

  const btnHandler = () => {
    if (setState === null) {
      dispatch(locationActions.current(select[0]));
    } else {
      setState(select[0]);
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
