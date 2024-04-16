import { useAppDispatch } from 'hooks';
import { locationActions } from 'store/modules/location';
import { translateLocationEngToKor } from 'utils/translateLocation';

interface selectBtn {
  select: string[];
  setState: React.Dispatch<React.SetStateAction<string>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const SelectBtn = ({ select, setState, setIsModalOpen }: selectBtn) => {
  const dispatch = useAppDispatch();

  return (
    <button
      className="h-12 mb-3 mr-2 w-23/50 rounded-xl bg-gray-00 text-Body3-M"
      onClick={() => {
        setState === dispatch
          ? dispatch(
              locationActions.setLocation(translateLocationEngToKor(select[0])),
            )
          : setState(select[0]);
        setIsModalOpen([false, false, false]);
      }}
    >
      {select[1]}
    </button>
  );
};

export default SelectBtn;
