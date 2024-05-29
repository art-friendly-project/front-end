import { useAppDispatch } from 'hooks';
import { locationActions } from 'store/modules/location';

interface selectBtn {
  select: string[];
  setState: React.Dispatch<React.SetStateAction<string>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean[]>>;
  setShows: React.Dispatch<React.SetStateAction<show[]>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const SelectBtn = ({ select, setState, setIsModalOpen }: selectBtn) => {
  const dispatch = useAppDispatch();

  const btnHandler = () => {
    setState === dispatch
      ? dispatch(locationActions.current(select[0]))
      : setState(select[0]);
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
