import { usePostOrPatchRank } from 'hooks/query/usePostOrPatchRank';
import { type Dispatch, type SetStateAction } from 'react';

interface rankIcon {
  id: number;
  idx: number;
  icon: string[];
  isSelectedRank: boolean;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  checkTemperature: string | null;
}

const RankIcon = ({
  id,
  idx,
  icon,
  isSelectedRank,
  setIsModal,
  checkTemperature,
}: rankIcon) => {
  const mutate = usePostOrPatchRank(id, idx, checkTemperature);

  const btnHandler = () => {
    if (isSelectedRank) {
      setIsModal(true);
    }

    if (!isSelectedRank) {
      mutate();
    }
  };

  return (
    <button
      onClick={() => {
        btnHandler();
      }}
      className="flex items-center justify-center rounded-lg h-28 w-18 active:bg-gray-00"
    >
      <img src={isSelectedRank ? icon[1] : icon[0]} />
    </button>
  );
};

export default RankIcon;
